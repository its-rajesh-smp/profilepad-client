import supabase, { currentSessionToken } from "@/setup/supabase.conf";
import { useEffect } from "react";

function useSupabaseListener(eventMap: Record<string, (data: any) => void>) {
  useEffect(() => {
    // Subscribe to a channel for real-time updates
    const channel = supabase
      .channel("realtime")
      .on("broadcast", { event: "*" }, (data: any) => {
        const { event, payload } = data;
        if (eventMap[event]) {
          if (payload.deviceToken === currentSessionToken) return;
          delete payload.deviceToken;
          eventMap[event](payload);
        }
      })
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [eventMap]);
}

export default useSupabaseListener;
