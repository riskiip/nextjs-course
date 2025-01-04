export default function ReviewProduct({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  return (
    <h1>
      Ini review ke {params.reviewId} untuk detail produk {params.productId}
    </h1>
  );
}
