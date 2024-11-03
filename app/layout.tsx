/**
 * @copyright 2024 Jordan Ny Riantsoa Jordan
 * @license Apache-2.0
 */

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` scrollbar-thin scrollbar-track-accent scrollbar-thumb-primary antialiased`}
      >
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
