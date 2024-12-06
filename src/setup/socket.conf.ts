import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

export const emitEvent = (event: string, data: any) => {
  socket.emit(event, data);
};

export default socket;
