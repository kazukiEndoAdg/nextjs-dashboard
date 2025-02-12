'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

// NOTE: Link Component
// To improve the navigation experience, Next.js automatically code splits your application by route segments. This is different from a traditional React SPA, where the browser loads all your application code on the initial page load.

// Splitting code by routes means that pages become isolated. If a certain page throws an error, the rest of the application will still work. This is also less code for the browser to parse, which makes your application faster.

// Furthermore, in production, whenever <Link> components appear in the browser's viewport, Next.js automatically prefetches the code for the linked route in the background. By the time the user clicks the link, the code for the destination page will already be loaded in the background, and this is what makes the page transition near-instant!

// ナビゲーションエクスペリエンスを向上させるために、Next.jsはルートセグメントごとにアプリケーションを自動的にコード分割します。これは、ブラウザが初期ページ読み込み時にすべてのアプリケーションコードを読み込む従来のReact SPAとは異なります。

// ルートごとにコードを分割することで、ページが分離されます。特定のページでエラーが発生しても、アプリケーションの他の部分は引き続き動作します。これにより、ブラウザが解析するコードが少なくなり、アプリケーションが高速化されます。

// さらに、本番環境では、<Link>コンポーネントがブラウザのビューポートに表示されると、Next.jsはリンク先のルートのコードをバックグラウンドで自動的にプリフェッチします。ユーザーがリンクをクリックする頃には、リンク先のページのコードがバックグラウンドで既に読み込まれており、ページ遷移がほぼ瞬時に行われるのです！

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
