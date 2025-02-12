import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

// NOTE: Root Layout
// This is called a root layout and is required in every Next.js application. Any UI you add to the root layout will be shared across all pages in your application. You can use the root layout to modify your <html> and <body> tags, and add metadata (you'll learn more about metadata in a later chapter).
// ルートレイアウトはすべてのNext.jsアプリケーションで必要です。ルートレイアウトに追加したUIは、アプリケーション内のすべてのページで共有されます。ルートレイアウトを使用して、<html>および<body>タグを変更し、メタデータを追加できます（メタデータについては後の章で詳しく説明します）。

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
