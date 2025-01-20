import Image from "next/image";
import Link from "next/link";
import wonders from "./wonder";

export default function PhotoFeed() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold mx-4">New Seven Wonders</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {wonders.map(({ id, src, name }) => (
          <Link href={`/photo-feed/${id}`} key={id}>
            <Image
              alt={name}
              src={src}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
