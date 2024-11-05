import { Button } from "@/common/components/shadcn/ui/button";
import { Input } from "@/common/components/shadcn/ui/input";
import { debounce } from "@/common/utils/debounce.util";
import { useCallback, useState } from "react";
import { BiLoader } from "react-icons/bi";
import { IoMdCheckmark } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { verifySlug } from "../services/register.service";

function RegistrationForm() {
  const [slugText, setSlugText] = useState("");
  const [isAvailable, setIsAvailable] = useState<boolean | undefined>(
    undefined,
  );
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Debounced function for verifying the slug
  const debouncedVerifySlug = useCallback(
    debounce(async (slug: string) => {
      if (slug.length === 0) {
        setIsAvailable(undefined);
        return;
      }
      const response = await verifySlug(slug);
      setIsAvailable(response.data.isAvailable);
      setLoading(false);
    }, 500),
    [],
  );

  /**
   * Callback function for onTextChange
   * @param e Event
   */
  const onTextChange = (e: any) => {
    setLoading(true);
    const formattedSlug = e.target.value
      .toLowerCase()
      .trim()
      .replaceAll(" ", "-");
    setSlugText(formattedSlug);

    if (formattedSlug.length === 0) {
      setIsAvailable(undefined); // Reset availability when slug is empty
      setLoading(false);
      return;
    }
    debouncedVerifySlug(formattedSlug); // Pass formatted slug to debounced function
  };

  /**
   *  On claim button click set slug in local storage and navigate to login
   */
  const onClaimBtnClick = () => {
    if (isAvailable) {
      localStorage.setItem("slug", slugText);
      navigate("/login");
    }
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
        <div>
          <div className="flex items-center rounded-md bg-gray-100 px-3">
            <label className="text-sm text-gray-500">profilepad.in/</label>
            <Input
              value={slugText}
              onChange={onTextChange}
              className="h-12 border-0 p-0 outline-none focus-visible:ring-0"
              placeholder="your-name"
            />
            {loading && (
              <BiLoader className="h-6 w-6 animate-spin text-gray-500" />
            )}
            {isAvailable && slugText.length > 0 && (
              <IoMdCheckmark className="h-6 w-6 text-gray-500" />
            )}
          </div>
          <Button
            onClick={onClaimBtnClick}
            disabled={slugText.length === 0 || !isAvailable} // Disable if slug is empty or not available
            className={`visible mt-5 w-full ${!isAvailable && slugText.length > 0 ? "cursor-not-allowed" : ""}`}
          >
            Claim
          </Button>
          <p className="mt-2 text-xs text-red-500">
            {isAvailable === false && "Error: Slug is not available"}
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
