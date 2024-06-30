import { createServer } from "http";
import { Server } from "socket.io";

import { Music } from "./model/music";
import { Player } from "./model/player";
import { Playlist } from "./model/playlist";
import { Game } from "./model/game";

const httpServer = createServer();

//let gamList: Game[] = [];
let gameList = [];

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  socket.on("createLobby", (userName, optionsGame) => {
    const lobbyId = generateLobbyId();
    socket.join(lobbyId);
    // Crée un nouveau lobby s'il n'existe pas déjà déja
    if (!gameList[lobbyId]) {
      gameList[lobbyId] = new Game(
        lobbyId,
        lobbyId,
        [new Player(socket.id, userName, 0)],
        new Playlist(lobbyId),
        new Date(),
        new Date(),
        "",
        optionsGame,
        new Music(),
      );
    }
    socket.emit("lobbyCreated", lobbyId, socket.id);
    console.log("Lobby created:", lobbyId);
  });

  socket.on("joinLobby", (lobbyId, userName) => {
    // Vérifie si le lobby existe
    if (gameList[lobbyId]) {
      // Ajoute le joueur à la liste des joueurs du lobby
      gameList[lobbyId].addPlayer(new Player(socket.id, userName, 0));
      socket.join(lobbyId);
      // Émet un événement pour indiquer que le joueur a rejoint le lobby avec succès
      io.to(socket.id).emit("playerJoined", userName);
      // Émet un événement pour mettre à jour la liste des joueurs pour tous les clients dans le lobby
      io.to(lobbyId).emit("updatePlayerList", gameList[lobbyId].getPlayers);
      console.log(`Player ${userName} joined lobby ${lobbyId}`);
    } else {
      // Émet un événement pour indiquer que le lobby n'a pas été trouvé
      io.to(socket.id).emit("lobbyNotFound");
      console.log("Lobby not found");
    }
  });

  socket.on("deconnexion", (lobbyId, userId) => {
    if (true) {
      //si le player et bien dans la liste
      //le supprime
    } else {
      console.error("Lobby not found or players not defined in lobby.");
    }
  });
});

function generateLobbyId() {
  return Math.random().toString(36).substr(2, 9);
}

const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => {
  console.log(`Socket.io server is running on port ${PORT}`);
});
