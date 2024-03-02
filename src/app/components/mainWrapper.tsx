export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-withHeader flex justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-col px-4 py-16 ">{children}</div>
    </main>
  );
}
