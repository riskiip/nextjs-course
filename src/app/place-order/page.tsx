"use client"
import { useRouter } from "next/navigation";

export default function PlaceOrderPage() {
  const route = useRouter();
  const backToHome = () => {
    route.push('/');
  }

  return (
    <div>
      <h1>Thank you to order in our store</h1>
      <button onClick={backToHome}>Back to Home</button>
    </div>
  );
}