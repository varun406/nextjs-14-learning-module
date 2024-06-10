"use client";
import { Metadata } from "next";
import { usePathname } from "next/navigation";
import React from "react";

const Blog = () => {
  const pathname = usePathname();
  return <div>Blog</div>;
};

export default Blog;
