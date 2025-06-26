export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="col-start-1 md:col-start-2 col-end-3 row-start-1 md:row-start-2 row-end-3">
      {children}
    </main>
  );
}
