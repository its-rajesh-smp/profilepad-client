import { SOCKET_EVENTS } from "@/common/constants/socket-events.const";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import useSocketListener from "@/common/hooks/useSocketListener";
import { emitEvent } from "@/setup/socket.conf";
import { useEffect, useRef } from "react";
import useWebRtc from "../hooks/useWebRtc";
import VideoContainer from "./UI/VideoContainer";

function Connect({ videoCallers }: any) {
  const { email } = useAppSelector((state) => state.authSlice.user);
  const negotiationCount = useRef(0);

  // WebRTC hook
  const {
    remoteStream,
    closeConnection,
    myStream,
    createOffer,
    createAnswer,
    setRemoteAnswer,
  } = useWebRtc();

  // Opened a subscription to receive incoming calls
  // Opened a subscription to call received
  useSocketListener(
    SOCKET_EVENTS.RECEIVE_INCOMING_CALL,
    handleReceiveIncomingCall,
  );

  useSocketListener(SOCKET_EVENTS.CALL_RECEIVED, handelCallReceived);

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
    emitEvent(SOCKET_EVENTS.CREATE_CALL, data);
  };

  /**
   * Function to handle receive incoming call
   * @param data
   * @returns
   */
  async function handleReceiveIncomingCall(data: any) {
    const { senderCreatedOffer } = data;
    const answer = await createAnswer(senderCreatedOffer);
    // Send the answer to the sender
    emitEvent(SOCKET_EVENTS.CALL_RECEIVED, answer);
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
      createCall();
      negotiationCount.current++;
    }
  }

  return (
    <>
      <VideoContainer
        streams={[myStream, remoteStream]}
        closeConnection={closeConnection}
      />
      {/* <Button
        onClick={createCall}
        className="absolute bottom-28 right-5 z-10 flex h-8 w-8 items-center justify-center rounded-full !bg-white shadow-md"
        icon={<BsCameraVideo className="text-black" />}
      /> */}
    </>
  );
}

export default Connect;
