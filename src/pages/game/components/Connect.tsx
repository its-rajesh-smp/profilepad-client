import { Button } from "@/common/components/shadcn/ui/button";
import { SOCKET_EVENTS } from "@/common/constants/socket-events.const";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import useSupabaseListener from "@/common/hooks/useSupabaseListener";
import { emitSupabaseEvent } from "@/setup/supabase.conf";
import { useEffect, useRef } from "react";
import { BsCameraVideo } from "react-icons/bs";
import useWebRtc from "../hooks/useWebRtc";
import VideoContainer from "./UI/VideoContainer";

function Connect({ videoCallers }: any) {
  const { email } = useAppSelector((state) => state.authSlice.user);
  const negotiationCount = useRef(0);

  // WebRTC hook
  const { remoteStream, myStream, createOffer, createAnswer, setRemoteAnswer } =
    useWebRtc();

  // Opened a subscription to receive incoming calls
  // Opened a subscription to call received
  useSupabaseListener({
    [`${SOCKET_EVENTS.INCOMING_CALL}:${email}`]: handleReceiveIncomingCall,
    [`${SOCKET_EVENTS.CALL_RECEIVED}:${email}`]: handelCallReceived,
  });

  useEffect(() => {
    if (videoCallers) {
      if (videoCallers[0].playerId != email) return;
      createCall();
    }
  }, [videoCallers]);

  /**
   * Function to join call
   */
  const createCall = async () => {
    const offer = await createOffer();
    const data = {
      receiverEmail: videoCallers[1].playerId,
      senderEmail: email,
      senderCreatedOffer: offer,
    };

    // Send the offer to the receiver
    emitSupabaseEvent(
      `${SOCKET_EVENTS.INCOMING_CALL}:${data.receiverEmail}`,
      data,
    );
  };

  /**
   * Function to handle receive incoming call
   * @param data
   * @returns
   */
  async function handleReceiveIncomingCall(data: any) {
    const { senderCreatedOffer } = data;
    const answer = await createAnswer(senderCreatedOffer);

    console.log(` Answer created for --> ${data.senderEmail}`);

    // Send the answer to the sender
    emitSupabaseEvent(
      `${SOCKET_EVENTS.CALL_RECEIVED}:${data.senderEmail}`,
      answer,
    );
  }

  /**
   * Function to handle call received
   * @param data
   */
  async function handelCallReceived(data: any) {
    await setRemoteAnswer(data);
    // Once answer is received
    // For negotiationNeeded we are processing once again
    if (negotiationCount.current === 0) {
      console.log("negotiating");
      createCall();
      negotiationCount.current++;
    }
  }

  return (
    <>
      <VideoContainer streams={[myStream, remoteStream]} />
      <Button
        onClick={createCall}
        className="absolute bottom-28 right-5 z-10 flex h-8 w-8 items-center justify-center rounded-full !bg-white shadow-md"
        icon={<BsCameraVideo className="text-black" />}
      />
    </>
  );
}

export default Connect;
