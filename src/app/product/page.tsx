import Link from "next/link";

export default function Product() {
  const productId = 10;

  return (
    <>
      <h2>Ini detail product</h2>
      <Link href={`/product/${productId}`}>Lihat detail dari list berikut</Link>

    </>
  )
}