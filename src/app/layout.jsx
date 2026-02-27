import "./globals.css";

export const metadata = {
  title: "HalalWealth — Halal Investing Made Simple",
  description: "Halal stocks, SIPs, trading & zakat tools",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
