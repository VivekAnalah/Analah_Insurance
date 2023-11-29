"use client";

import Link from "next/link";

export default function Linking({ path, children }) {
  return (
    <>
      <Link href={path}>{children}</Link>
    </>
  );
}
