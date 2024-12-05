import { SUPABASE_ANON_KEY, SUPABASE_URL } from "@/common/constants/app.const";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { v4 } from "uuid";

let supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
export let currentSessionToken: any = v4();

// Function to broadcast an event
export const emitSupabaseEvent = async (
  eventName: string,
  payload: any,
  channelName: string = "realtime",
) => {
  try {
    await supabase.channel(channelName).send({
      type: "broadcast",
      event: eventName,
      payload: { ...payload, deviceToken: currentSessionToken },
    });
  } catch (err) {
    console.error("Unexpected error broadcasting event:", err);
  }
};

export default supabase;
