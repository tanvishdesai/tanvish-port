import type { Metadata } from "next";
import { Sora, Space_Mono } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "@/components/ConvexClientProvider";
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tanvish Desai | AI/ML Researcher and Creative Builder",
  description:
    "Portfolio of Tanvish Desai: AI/ML researcher and full-stack builder focused on efficient models, multimodal intelligence, and creative product experiences.",
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
    title: "Tanvish Desai | AI/ML Researcher and Creative Builder",
    description:
      "Building efficient AI systems from multimodal deepfake detection to edge-deployed foundation models.",
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
      <body className={`${sora.variable} ${spaceMono.variable} font-sans antialiased`}>
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
