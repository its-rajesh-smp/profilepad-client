import { Button } from "@/common/components/shadcn/ui/button";
import { Input } from "@/common/components/shadcn/ui/input";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className="flex h-full w-1/2 items-center">
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
            />
            <Input
              className="h-12 border-0 bg-gray-100 outline-none focus-visible:ring-0"
              placeholder="Password"
            />
          </div>
          <p className="text-xs font-extrabold text-gray-500">OR</p>
          <Button className="visible h-12 w-full">Login</Button>
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
