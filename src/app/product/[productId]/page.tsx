export default function ProductDetails({
  params,
}: {
  params: { productsId: string };
}) {
  // productId bisa otomatis menjadi dynamic params karena nama folder (file-system based)
  return <h1>Ini detail produk {params.productsId}</h1>;
}
