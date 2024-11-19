import { Button } from "@/common/components/shadcn/ui/button";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { toast } from "sonner";

const confettiConfig = {
  force: 0.4,
  duration: 2200,
  particleCount: 30,
  width: 400,
};

function ShareButton() {
  const { slug } = useAppSelector((state) => state.authSlice.user);
  const [showConfetti, setShowConfetti] = useState(false);

  const onClickShareBtn = () => {
    if (showConfetti === true) return;
    setShowConfetti(true);
    navigator.clipboard.writeText(`${window.location.origin}/${slug}`);
    toast("Link is copied to clipboard");
  };

  return (
    <div>
      {showConfetti && (
        <ConfettiExplosion
          onComplete={() => {
            setShowConfetti(false);
          }}
          {...confettiConfig}
        />
      )}
      <Button
        disabled={showConfetti}
        tooltipText="Share"
        onClick={onClickShareBtn}
        variant="default"
        size="xs"
      >
        Share
      </Button>
    </div>
  );
}

export default ShareButton;
