export default function PostPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="px-6 mx-auto w-full max-w-[700px] min-h-screen flex flex-col">
      {children}
    </main>
  );
}
