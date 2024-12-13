import { Button } from "@/common/components/shadcn/ui/button";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useGoogleLogin } from "@react-oauth/google";
import { motion } from "framer-motion";
import { useState } from "react";
import { BiLogoGoogle } from "react-icons/bi";
import { toast } from "sonner";
import { googleLoginAct } from "../../action-creators/google-login.act";

function LoginWithGoogle({
  btnText = "Sign in with Google",
  slug,
}: {
  slug?: string;
  btnText?: string;
}) {
  const dispatch = useAppDispatch();
  const [loader, setLoader] = useState(false);

  /**
   *  hook to handle login with google
   */
  const loginWithGoogle = useGoogleLogin({
    onSuccess: (response) => {
      setLoader(false);
      dispatch(googleLoginAct(response.access_token, slug));
    },
    onError: (error) => {
      setLoader(false);
      console.log("Login Failed:", error);
      toast.error("Oops! Login Failed. Please try again.");
    },
  });

  /**
   *  Function to handle login
   * @param e
   */
  const onBtnClick = (e: any) => {
    e.preventDefault();
    setLoader(true);
    loginWithGoogle();
  };

  return (
    <Button
      loading={loader}
      onClick={onBtnClick}
      className="visible h-12 w-full"
    >
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {btnText}
        <BiLogoGoogle />
      </motion.div>
    </Button>
  );
}

export default LoginWithGoogle;
