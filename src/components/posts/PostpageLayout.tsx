export default function PostpageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="px-5 md:mx-auto w-full md:w-[80%] lg:w-[70%] xl:w-[60%] min-h-screen flex flex-col mt-10">
      {children}
    </main>
  );
}