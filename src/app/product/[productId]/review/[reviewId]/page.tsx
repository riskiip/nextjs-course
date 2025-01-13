import { notFound } from "next/navigation";

export default async function ReviewProduct({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 500) {
    // Tinggal panggil function notFound dari next/navigation. Otomatis akan diarahkan ke not-found.tsx dalam folder tsb
    notFound();
  }
  return (
    <h1>
      Ini review ke {reviewId} untuk detail produk {productId}
    </h1>
  );
}
