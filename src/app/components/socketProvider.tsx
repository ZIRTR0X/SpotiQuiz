import React, { createContext } from "react";
import { io, Socket } from "socket.io-client";

const socket = io("http://localhost:3001", {
    reconnectionDelay: 1000,
    reconnection: true,
    reconnectionAttempts: 10,
    agent: false,
    upgrade: false,
    rejectUnauthorized: false,
  }),
  SocketContext = createContext<Socket>(socket);

  socket.on("connect", () => {
    console.log("someone connected: ", socket?.id);
  });

const SocketProvider = ({ children }: any) => {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
export { SocketContext, SocketProvider };