import Link from "next/link";

export default function F4() {
  return (
    <>
      <h1>F4 Page</h1>
      <div>
        <Link href={'/f1/f3'}>To F3 Page</Link>
        <Link href={'/about'}>Go to About Page</Link>
      </div>
    </>
  );
}
