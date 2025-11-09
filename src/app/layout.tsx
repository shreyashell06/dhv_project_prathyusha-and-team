// src/app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "StyleSphere",
  description: "Customer Tribes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        {children}
      </body>
    </html>
  );
}
