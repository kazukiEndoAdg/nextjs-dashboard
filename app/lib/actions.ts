'use server';
 
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import postgres from 'postgres';
 
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  // Note: zod coercion(zodによる型強制変換。元々のstring型からnumber型に変換する)
  // zod offers a number coercion method
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});

// Note: zod omit(zodによる型省略)
// zod offers omit specific properties from an object schema
const CreateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
    const rawFormData = {
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    };
    // Test it out:
    console.log("rawFormData", rawFormData);
    const { customerId, amount, status } = CreateInvoice.parse(rawFormData);

    const amountInCents = amount * 100;

    // Note: (DB) Create date for DB column
    // create a new date with the format "YYYY-MM-DD" for the invoice's creation date:
    const date = new Date().toISOString().split('T')[0];
    await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;

  // Note: Clear Route Cache. Revalidate and redirect
  // Since you're updating the data displayed in the invoices route, you want to clear this cache and trigger a new request to the server. You can do this with the revalidatePath function from Next.js:
  // Nextjsではデフォルトでルートの情報をキャッシュするため、DBに更新をかけるなどした後は任意のタイミングでキャッシュクリアが必要になる。
  // キャッシュクリアした場合、再度サーバにデータ取得のリクエストが行われる
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
  }