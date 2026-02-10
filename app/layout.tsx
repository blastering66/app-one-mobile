import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "@/components/ReduxProvider";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "QuickFood - Fast Food Delivery",
  description: "Order delicious food delivered to your doorstep",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ReduxProvider>
          <Navigation />
          <div className="pt-16">{children}</div>
        </ReduxProvider>
      </body>
    </html>
  );
}
