import Link from "next/link";

export default function F2() {
  return (
    <>
      <h1>F2 Page</h1>
      <div>
        <Link href={"/f1"}>Back to F1</Link>
      </div>
    </>
  );
}
