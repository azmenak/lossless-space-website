import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lossless Home Solutions | Ultra High-End Audio & Home Automation - Las Vegas',
  description:
    'Ultra high-end audio solutions, home automation, and smart home systems for Las Vegas homes. Custom installations with seamless design integration.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
