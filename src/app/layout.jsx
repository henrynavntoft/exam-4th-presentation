import "./globals.css";
import { Providers } from "./providers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "4th Semester Exam Presentation Update",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="text-foreground bg-background">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
