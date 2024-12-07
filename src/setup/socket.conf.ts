import { API_URL } from "@/common/constants/app.const";
import { io } from "socket.io-client";
const socket = io(API_URL);

export const emitEvent = (event: string, data: any) => {
  socket.emit(event, data);
};

export default socket;
