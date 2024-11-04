import { Button } from "@/common/components/shadcn/ui/button";
import { Input } from "@/common/components/shadcn/ui/input";
import { Link } from "react-router-dom";

function RegistrationForm() {
  return (
    <div className="flex h-full items-center lg:w-1/2">
      <form className="flex flex-col gap-20">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold">First, claim your unique link</h1>
          <h1 className="text-xl text-gray-500">
            The good ones are still available!
          </h1>
        </div>
        <div>
          <div className="flex items-center rounded-md bg-gray-100 px-3">
            <label className="text-sm text-gray-500">profilepad.in/</label>
            <Input
              className="h-12 border-0 p-0 outline-none focus-visible:ring-0"
              placeholder="your-name"
            />
          </div>
          <Button className="visible mt-5 w-full">Claim</Button>
          <p className="mt-2 text-xs text-red-500">
            Error: Something went wrong{" "}
          </p>
        </div>
        <div>
          <Link to="/login" className="text-xs text-gray-500">
            or log in
          </Link>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
