export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <h1 style={{color: 'red'}}>Ini adalah layout place-order</h1>
      {children}
    </>
  );
}