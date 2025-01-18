import { notFound } from "next/navigation";

function getRandomNumber(count: number) {
  return Math.floor(Math.random() * count)
}

export default async function ReviewProduct({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  const random = getRandomNumber(2);
  const { productId, reviewId } = await params;
  if (random === 1) {
    throw new Error('Error in review component');
  }
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
