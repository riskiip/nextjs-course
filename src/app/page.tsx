import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2>Ini Home Component</h2>
      <Link href="/product">Pergi ke Product</Link>
    </>
  );
}