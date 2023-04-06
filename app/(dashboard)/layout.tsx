import GlassPane from '@/components/GlassPane';
import "@/styles/global.css";
import { Sidebar } from 'react-feather';
import { Inter } from "@next/font/google";

const inter = Inter({
  variable: "--font-inter",
});

export default function DashboardRootLayout({ children }) {
  return (
    <html lang="en" >
          <head>
              {/* <meta charSet="utf-8" /> */}
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
              <title>Next.js + Tailwind CSS</title>
          </head>
          
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className="w-full h-full flex items-center justify-center">
          <Sidebar/>
          {children}
        </GlassPane>
      </body>
    </html>
  );
}