export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main className="px-5 md:mx-auto w-full md:w-[80%] lg:w-[70%] xl:w-[60%] min-h-screen flex flex-col pt-10">
        {children}
      </main>
    </div>
  );
}
