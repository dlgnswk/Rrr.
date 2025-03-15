export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main className="px-5 md:mx-auto  max-w-[900px] w-full min-h-screen flex flex-col pt-10">
        {children}
      </main>
    </div>
  );
}
