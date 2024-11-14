import { Button } from "@/common/components/shadcn/ui/button";
import { Input } from "@/common/components/shadcn/ui/input";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { getErrorMessage } from "@/common/utils/error.util";
import { useState } from "react";
import { Link } from "react-router-dom";
import { loginAct } from "../action-creators/login.act";
import AuthErrorMassage from "./UI/AuthErrorMassage";
import { motion } from "framer-motion";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const [loader, setLoader] = useState(false);

  // Function to handle login
  const onClickLogin = async (e: any) => {
    e.preventDefault();
    try {
      setLoader(true);
      await dispatch(loginAct(formData));
    } catch (error: any) {
      setErrorMessage(getErrorMessage(error));
    } finally {
      setLoader(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex h-full items-center lg:w-1/2"
    >
      <form className="flex flex-col gap-20">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold">Log in to your ProfilePad</h1>
          <h1 className="text-xl text-gray-500">Good to have you back!</h1>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <Input
              className="h-12 border-0 bg-gray-100 outline-none focus-visible:ring-0"
              placeholder="Email address"
              required
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
            />
            <Input
              className="h-12 border-0 bg-gray-100 outline-none focus-visible:ring-0"
              required
              placeholder="Password"
              type="password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              value={formData.password}
            />
          </div>
          <p className="text-xs font-extrabold text-gray-500 opacity-0">OR</p>
          <Button
            loading={loader}
            onClick={onClickLogin}
            className="visible h-12 w-full"
          >
            Login
          </Button>
          {/* <Button className="visible h-12 w-full">
            <BiLogoGoogle />
            Sign in with Google
          </Button> */}

          <AuthErrorMassage
            message={errorMessage}
            show={errorMessage.length > 0}
          />
        </div>
        <div>
          <Link to="/register" className="text-xs text-gray-500">
            or sign up
          </Link>
        </div>
      </form>
    </motion.div>
  );
}

export default LoginForm;
