import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body className={`17xl:flex 17xl:justify-center`}>
        <div className="17xl:max-w-[1512px]">{children}</div>
      </body>
    </html>
  );
}
