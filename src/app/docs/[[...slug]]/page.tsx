export default async function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  // Harus buat await karena menggunakan async. Penggunaan async karena memakai paramMap url
  // const slug karena variable parameter yang digunakan diatas bernama slug
  const { slug } = await params;
  if (slug?.length === 2) { // docs/feature/concept
    return (
      <h1>
        Accessing feature {slug[0]} concept {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) { // docs/feature
    return <h1>Accessing only feature {slug[0]}</h1>;
  }
  return <h1>Docs works</h1>; // docs
}
