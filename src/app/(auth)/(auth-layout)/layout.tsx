export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2>Ini layout untuk regis dan login</h2>
      {children}
    </section>
  );
}
