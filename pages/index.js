import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <h1>
      Default Page
      <Link href="/posts"> Posts</Link>
    </h1>
  );
}
