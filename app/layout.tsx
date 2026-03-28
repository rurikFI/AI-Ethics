import "./globals.css";
import AuthHeader from "@/components/AuthHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthHeader />
        {children}
      </body>
    </html>
  );
}
