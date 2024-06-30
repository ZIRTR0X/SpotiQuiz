"use client";

import { Button, Input, Tab, Tabs } from "@nextui-org/react";
import { useState } from "react";
import MainWrapper from "~/app/components/mainWrapper";
import { GameOptions } from "~/models/gameOptions";
import { WinningGameOptions } from "~/models/winningGameOptions";

export default function HomePage() {
    const [gameOptions, setGameOptions] = useState<GameOptions | null>(null);
    const [gameStarted, setGameStarted] = useState(false);



  return (
    <MainWrapper>
        
        <div style={{ display: !gameStarted ? "none" : "" }}>
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                La partie est en cours
            </h1>
        </div>

    </MainWrapper>
  );
}
