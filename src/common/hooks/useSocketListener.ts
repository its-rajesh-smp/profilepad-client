import socket from "@/setup/socket.conf";
import { useEffect } from "react";

function useSocketListener(eventName: string, callback: (data: any) => void) {
  // if socket is disabled
  if (!socket) return;

  useEffect(() => {
    if (!socket) return;
    socket.on(eventName, (data) => {
      callback(data);
    });

    return () => {
      if (!socket) return;
      socket.off(eventName, callback);
    };
  }, [eventName, callback]);
}

export default useSocketListener;
