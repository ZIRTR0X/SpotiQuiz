"use client";

import { Button } from "@nextui-org/react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import MainWrapper from "~/app/components/mainWrapper";

export default function LoginPage() {
  const session = useSession();
  const router = useRouter();

  function handleSignIn() {
    return signIn("spotify")
      .then(() => router.push("/game/start"))
      .catch((error) => {
        console.error("Failed to sign in", error);
      });
  }

  return (
    <MainWrapper>
      <div>
        {session.status !== "authenticated" && (
          <div
            id="connection-div"
            className="mt-16 flex flex-col items-center justify-center"
          >
            <p className="text-4xl font-bold">Welcome to</p>
            <p className="mt-10 text-4xl font-bold">
              Spotify Playlists Manager !
            </p>
            <p className="mb-10 mt-24 text-xl">Please sign in to continue</p>
            <Button onClick={() => handleSignIn()}>Sign in</Button>
          </div>
        )}
      </div>
    </MainWrapper>
  );
}
