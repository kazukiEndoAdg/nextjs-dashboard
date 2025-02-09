// NOTE: fonts
// In your /app/ui folder, create a new file called fonts.ts. You'll use this file to keep the fonts that will be used throughout your application.

// Webフォントにおけるサブセット（subset）とは、フォントファイルから必要なグリフだけを抜き出したものをいいます。 サブセットを作ることを「サブセット化」や「サブセッテイング」（subsetting）と呼びます。 フォントをサブセット化することでファイルのサイズを抑え、より高速にダウンロードできるようになります。

// By adding Inter to the <body> element, the font will be applied throughout your application. Here, you're also adding the Tailwind antialiased class which smooths out the font. It's not necessary to use this class, but it adds a nice touch.

import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({weight: ["400", "700"],subsets: ['latin']});