"use client";

import { Button, Input, Tab, Tabs } from "@nextui-org/react";
import { useState } from "react";
import MainWrapper from "~/app/components/mainWrapper";
import { GameOptions } from "~/models/gameOptions";
import { WinningGameOptions } from "~/models/winningGameOptions";

export default function HomePage() {
	const [gameOptions, setGameOptions] = useState<GameOptions | null>(null);

	function startGame(): void {
		const winningGameOptionsType: string = document.querySelector<HTMLInputElement>(".winningGameOptions")!.value;
		const time: string = document.querySelector<HTMLInputElement>(".timerInput")!.value;
		const point: string = document.querySelector<HTMLInputElement>(".pointInput")!.value;
		const music: string = document.querySelector<HTMLInputElement>(".musicInput")!.value;
		const musicDuration = document.querySelector<HTMLInputElement>(".musicDurationInput")!.value;

		const winningGameOptions = getWinningGameOptions(winningGameOptionsType, time, point, music);
		const gameOptions = new GameOptions("1", parseInt(musicDuration), winningGameOptions);

		setGameOptions(gameOptions);
	}

	function getWinningGameOptions(winningGameOption: string, time: string, point: string, musicNumber: string): WinningGameOptions {
		if (winningGameOption === "time") return new WinningGameOptions(parseInt(time), 0, 0);
		if (winningGameOption === "point") return new WinningGameOptions(0, parseInt(point), 0);
		if (winningGameOption === "music") return new WinningGameOptions(0, 0, parseInt(musicNumber));
		return new WinningGameOptions(0, 0, 0);
	}

	return (
		<MainWrapper>
			<h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">Options</h1>

			<div className="options">
				<Tabs color="secondary" aria-label="options" className="winningGameOptions">
					<Tab key="time" title="Temps">
						<Input
							type="number"
							label="Temps de la partie"
							placeholder="0"
							labelPlacement="outside"
							color="default"
							endContent={<span className="text-black">s</span>}
							className="timerInput"
						/>
					</Tab>
					<Tab key="point" title="Nombre de point">
						<Input
							type="number"
							label="Nombre de point pour gagner"
							placeholder="0"
							labelPlacement="outside"
							endContent={<span className="text-black">point</span>}
							className="pointInput"
						/>
					</Tab>
					<Tab key="music" title="Nombre de musique">
						<Input
							type="number"
							label="Nombre de music max"
							placeholder="0"
							labelPlacement="outside"
							endContent={<span className="text-black">musiques</span>}
							className="musicInput"
						/>
					</Tab>
				</Tabs>
				<Input
					type="number"
					label="Durée des musiques"
					placeholder="0"
					labelPlacement="outside"
					endContent={<span className="text-black">s</span>}
					className="musicDurationInput"
				/>
			</div>

			<div className="mt-10 flex justify-center">
				<Button className="btn btn-primary" onClick={() => startGame()}>
					Commencer
				</Button>
			</div>
		</MainWrapper>
	);
}
