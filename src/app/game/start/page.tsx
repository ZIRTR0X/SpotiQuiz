import MainWrapper from "~/app/components/mainWrapper";

export default function HomePage() {
  return (
    <MainWrapper>
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        Create <span className="text-[hsl(280,100%,70%)]">T3</span>
      </h1>
    </MainWrapper>
  );
}
