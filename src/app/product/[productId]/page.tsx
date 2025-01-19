import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const param = await params;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${param.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default async function ProductDetails({ params }: Props) {
  // productId bisa otomatis menjadi dynamic params karena nama folder (file-system based)
  const param = await params;

  return (
    <>
      <h1>Ini detail produk {param.productId}</h1>
      <Link href="/" replace><h3>Kembali ke home</h3></Link>
    </>
  )
}
