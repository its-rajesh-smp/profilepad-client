import { useEffect, useRef, useState } from "react";

function useWebRtc() {
  const [remoteStream, setRemoteStream] = useState(null);
  const [myStream, setMyStream] = useState(null);
  const peerRef = useRef<RTCPeerConnection | null>(null);

  useEffect(() => {
    createPeer();
    peerRef.current?.addEventListener("track", handleGetTrack);
    peerRef.current?.addEventListener(
      "negotiationneeded",
      handleNegotiationNeeded,
    );
    (async () => {
      const mediaStream: any = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setMyStream(mediaStream);
      await sendStream(mediaStream);
    })();
    return () => {
      peerRef.current?.removeEventListener("track", handleGetTrack);
      peerRef.current?.removeEventListener(
        "negotiationneeded",
        handleNegotiationNeeded,
      );
    };
  }, []);

  function createPeer() {
    const peer = new RTCPeerConnection({
      iceServers: [
        {
          urls: ["stun:stun.l.google.com:19302"],
        },
      ],
    });
    peerRef.current = peer;
  }

  async function createOffer() {
    if (!peerRef.current) return;
    const offer = await peerRef.current.createOffer();
    await peerRef.current.setLocalDescription(offer);
    return offer;
  }

  async function createAnswer(offer: RTCSessionDescriptionInit) {
    try {
      await peerRef.current?.setRemoteDescription(offer);
      const answer = await peerRef.current?.createAnswer();
      await peerRef.current?.setLocalDescription(answer);
      return answer;
    } catch (error) {
      console.log(error);
    }
  }

  async function setRemoteAnswer(answer: RTCSessionDescriptionInit) {
    await peerRef.current?.setRemoteDescription(answer);
  }

  async function sendStream(stream: MediaStream) {
    const tracks = stream.getTracks();
    for (const track of tracks) {
      peerRef.current?.addTrack(track, stream);
    }
  }

  async function handleGetTrack(event: any) {
    const stream = event.streams[0];
    setRemoteStream(stream);
  }

  async function handleNegotiationNeeded() {
    console.log("negotiation needed");
  }

  return {
    peerRef,
    myStream,
    remoteStream,
    createOffer,
    createAnswer,
    setRemoteAnswer,
  };
}

export default useWebRtc;
