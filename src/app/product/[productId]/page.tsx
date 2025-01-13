import { Metadata } from "next";

type Props = {
  params: {
    productId: string
  }
}

export const generateMetadata = ({params}: Props): Metadata => {
  return {
    title: `Product ${params.productId}`
  }
}

export default function ProductDetails({params}: Props) {
  // productId bisa otomatis menjadi dynamic params karena nama folder (file-system based)
  return <h1>Ini detail produk {params.productId}</h1>;
}
