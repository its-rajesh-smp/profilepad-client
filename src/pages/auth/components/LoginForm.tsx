import { Button } from "@/common/components/shadcn/ui/button";
import { Input } from "@/common/components/shadcn/ui/input";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerAct } from "../action-creators/register.act";

function LoginForm() {
  const [localSlug, setLocalSlug] = useState<string>("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Setting the local slug
  useEffect(() => {
    const slug = localStorage.getItem("slug");
    if (slug) {
      setLocalSlug(slug);
    }
  }, []);

  // Function to handle login
  const onClickLogin = (e: any) => {
    e.preventDefault();
    if (!localSlug) {
      navigate("/register");
      return;
    }
    dispatch(registerAct(formData));
  };

  return (
    <div className="flex h-full items-center lg:w-1/2">
      <form className="flex flex-col gap-20">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold">First, claim your unique link</h1>
          <h1 className="text-xl text-gray-500">
            The good ones are still available!
          </h1>
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
          <p className="text-xs font-extrabold text-gray-500">OR</p>
          <Button onClick={onClickLogin} className="visible h-12 w-full">
            Login
          </Button>
          {/* <Button className="visible h-12 w-full">
            <BiLogoGoogle />
            Sign in with Google
          </Button> */}
          <p className="text-xs text-red-500">Error: Something went wrong </p>
        </div>
        <div>
          <Link to="/register" className="text-xs text-gray-500">
            or sign up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
