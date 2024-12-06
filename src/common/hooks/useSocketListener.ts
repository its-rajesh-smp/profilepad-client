import socket from "@/setup/socket.conf";
import { useEffect } from "react";

function useSocketListener(eventName: string, callback: (data: any) => void) {
  useEffect(() => {
    socket.on(eventName, (data) => {
      callback(data);
    });

    return () => {
      if (!socket) return;
      socket.off(eventName, callback);
    };
  }, [eventName]);
}

export default useSocketListener;
