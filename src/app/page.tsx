"use client";

import { Button } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import MainWrapper from "./components/mainWrapper";

export default function HomePage() {
  const session = useSession();
  const router = useRouter();

  function handleStartQuiz() {
    if (session.status !== "authenticated") {
      router.push("/auth/login");
    } else {
      router.push("/game/start");
    }
  }

  return (
    <div>
      <MainWrapper>
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          <span className="text-purple-500">S</span>poti
          <span className="text-purple-500">Q</span>uiz
        </h1>
        <div className="mt-16 flex flex-row justify-center">
          <Button onClick={() => handleStartQuiz()}>Commencer</Button>
        </div>
      </MainWrapper>
    </div>
  );
}
