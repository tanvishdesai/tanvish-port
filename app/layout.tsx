import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Tanvish Desai — AI/ML Researcher & Developer",
  description:
    "Portfolio of Tanvish Desai — building efficient AI systems, from multimodal deepfake detection to edge-deployed foundation models. Published researcher with expertise in PyTorch, Vision Transformers, and full-stack development.",
  keywords: [
    "Tanvish Desai",
    "AI researcher",
    "ML engineer",
    "portfolio",
    "deepfake detection",
    "multimodal learning",
    "PyTorch",
    "full-stack developer",
  ],
  openGraph: {
    title: "Tanvish Desai — AI/ML Researcher & Developer",
    description:
      "Building efficient AI systems — from multimodal deepfake detection to edge-deployed foundation models.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
