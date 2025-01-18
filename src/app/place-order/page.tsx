"use client"
import { useRouter } from "next/navigation";

function getRandomNumber(count: number) {
  return Math.floor(Math.random() * count);
}

export default function PlaceOrderPage() {
  const randomNumber = getRandomNumber(2);
  const route = useRouter();
  const backToHome = () => {
    route.push('/');
  }

  if (randomNumber === 1) {
    throw new Error('Error in place-order');
  }

  return (
    <div>
      <h1>Thank you to order in our store</h1>
      <button onClick={backToHome}>Back to Home</button>
    </div>
  );
}