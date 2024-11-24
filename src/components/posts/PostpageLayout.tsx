export default function PostpageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-sky">
      <main className="px-5 md:mx-auto w-full md:w-[80%] lg:w-[70%] xl:w-[60%] min-h-screen flex flex-col pt-10">
        {children}
      </main>
    </div>
  );
}
