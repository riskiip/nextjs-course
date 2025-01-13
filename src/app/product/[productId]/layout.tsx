export default function ProductIdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
      <h2 style={{ backgroundColor: "red", padding: "1rem" }}>
        Halo semua nya
      </h2>
    </section>
  );
}
