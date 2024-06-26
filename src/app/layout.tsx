// import { ThemeProvider } from "@/Provider/ThemeProvider";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Header } from "./common/components/Header";
// import { ThemeProvider } from "next-themes";
import { ThemeWrapper } from "./ThemeWrapper";
import { HealthChecker } from "./common/components/HealthChecker";
// import { NextProgressBar } from "./common/components/NextProgressBar";
import { Suspense, useCallback } from "react";
import { Loader } from "./common/components/Loader";
import { PageLoader } from "./common/components/PageLoader";
import { AuthContextProvider } from "../context/AuthContext";
// import { LoggedinUserData } from "@/utils/auth";
import { redirect, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
// import NotificationInit from "./common/components/NotificationInit";

const NotificationInitNoSSR = dynamic(
  () =>
    import("./common/components/NotificationInit").then((module: any) => {
      console.log("Dynamic import notificationInit -->", module);
      return module.default;
    }),
  { ssr: false }
);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  manifest: "./manifest",
  title: "Timesheet App",
  description: "Track your daily timesheet entries",
};

export const viewport: Viewport = {
  themeColor: "#1f2937",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const router = useRouter();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <ThemeWrapper>
            <Header />
            <Suspense fallback={<PageLoader />}>
              <div className="container mx-auto md:p-8 my-8">{children}</div>
            </Suspense>
          </ThemeWrapper>
          <HealthChecker />
          {/* <NotificationInit /> */}
          <NotificationInitNoSSR />
        </AuthContextProvider>
      </body>
    </html>
  );
}
