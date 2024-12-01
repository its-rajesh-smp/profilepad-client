import { Button } from "@/common/components/shadcn/ui/button";
import { SOCKET_EVENTS } from "@/common/constants/socket-events.const";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import useSocketListener from "@/common/hooks/useSocketListener";
import { emitEvent } from "@/setup/socket.conf";
import { BsCameraVideo } from "react-icons/bs";
import useWebRtc from "../hooks/useWebRtc";
import VideoContainer from "./UI/VideoContainer";

function Connect() {
  const { email } = useAppSelector((state) => state.authSlice.user);

  // Listener for other player join event
  useSocketListener(SOCKET_EVENTS.RECEIVE_INCOMING_CALL, (data: any) => {
    handleReceiveIncomingCall(data);
  });

  // Listener for other player join event
  useSocketListener(SOCKET_EVENTS.CALL_RECEIVED, (data: any) => {
    handelCallReceived(data);
  });

  const { remoteStream, myStream, createOffer, createAnswer, setRemoteAnswer } =
    useWebRtc();

  /**
   * Function to join call
   */
  const createCall = async () => {
    const offer = await createOffer();
    const data = {
      receiverEmail: "red@gmail.com",
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
    emitEvent(SOCKET_EVENTS.CALL_RECEIVED, { answer });
  }

  async function handelCallReceived(data: any) {
    await setRemoteAnswer(data.answer);
  }

  return (
    <>
      <VideoContainer streams={[myStream, remoteStream]} />
      <Button
        onClick={createCall}
        className="absolute bottom-5 right-5 z-10 flex h-8 w-8 items-center justify-center rounded-full !bg-white shadow-md"
        icon={<BsCameraVideo className="text-black" />}
      />
    </>
  );
}

export default Connect;
