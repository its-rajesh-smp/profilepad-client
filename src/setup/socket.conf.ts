import { SOCKET } from "@/common/constants/app.const";
import { io } from "socket.io-client";
const socket = SOCKET ? io("http://localhost:3000") : null;

export const emitEvent = (event: string, data: any) => {
  if (!socket) return;
  // if socket is disabled
  socket.emit(event, data);
};

export default socket;
