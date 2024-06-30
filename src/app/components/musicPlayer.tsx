import { Button, Input, Tab, Tabs } from "@nextui-org/react";
import MainWrapper from "~/app/components/mainWrapper";
import { SocketContext } from "~/app/components/socketProvider";
import { useContext, useEffect, useState } from "react";

export default function MusicPlayer() {
    const [playingMusic, setPlayingMusic] = useState("");
    const socket = useContext(SocketContext);

    useEffect(() => {
        socket.on("updateMusique", (data) => {
        setPlayingMusic(data);
        });
    }, [socket]);

    return (
        <div>
            <h1>LECTEUR</h1>
            <h1>{playingMusic}</h1>
        </div>
    );
}