"use client";
import { Metadata } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: {
//     absolute: "",
//     default: "Default value from main layout",
//     template: "%s | Varun",
//   },
//   description: "Generated by Next.js",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setinput] = useState("");
  const router = useRouter();
  const handleClick = () => {
    router.forward();
  };
  return (
    <html lang="en">
      <body>
        <header style={{ height: 50, background: "lightBlue" }}>
          <p>Header</p>
        </header>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link
            href={{ pathname: "/product/1", query: { title: "static query" } }}
          >
            Product
          </Link>
          <Link href="/profile">Profile</Link>
          <button onClick={handleClick}>Click</button>
          <input value={input} onChange={(e) => setinput(e.target.value)} />
        </div>

        {children}
        <footer style={{ height: 50, background: "lightBlue" }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
