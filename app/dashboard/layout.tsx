import SideNav from '@/app/ui/dashboard/sidenav';

// NOTE: Partial Rendering using Layouts
// One benefit of using layouts in Next.js is that on navigation, only the page components update while the layout won't re-render. This is called partial rendering which preserves client-side React state in the layout when transitioning between pages.
// レイアウトで定義した内容は、ページ間を移動する際に再レンダリングされないため、クライアント側のReactステートが保持されます。これを部分レンダリングと呼びます。

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}