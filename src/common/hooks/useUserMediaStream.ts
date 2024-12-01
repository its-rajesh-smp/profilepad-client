import { useEffect, useState } from "react";

function useUserMediaStream(sendStream: any) {
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    (async () => {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      setStream(mediaStream);
      sendStream(mediaStream);
    })();
  }, []);

  return stream;
}

export default useUserMediaStream;
