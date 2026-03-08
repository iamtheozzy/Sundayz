import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SundayFlow — Sermon to Content in Minutes",
  description:
    "Upload your sermon. Get a week of social media clips, posts, devotionals, and more. Ten minutes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
