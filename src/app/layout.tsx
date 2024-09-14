"use client"; // Add this directive at the top of the file

import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import getMuiTheme from "../theme/mui";
import { Inter } from "next/font/google";
import "./globals.css";
import "../../public/fonts/stylesheet.css";
import "../styles/index.scss";
import SetUpGlobalColors from "./Logic";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/utils/request";
import I18NextProvider from "@/components/UI/I18NextProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const muiTheme = getMuiTheme();

  return (
    <I18NextProvider>
      <html lang="en">
        <SetUpGlobalColors />
        <body className={inter.className}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
          </QueryClientProvider>
        </body>
      </html>
    </I18NextProvider>
  );
}
