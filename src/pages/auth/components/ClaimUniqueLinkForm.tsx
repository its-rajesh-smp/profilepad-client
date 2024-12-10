import { Button } from "@/common/components/shadcn/ui/button";
import { Input } from "@/common/components/shadcn/ui/input";
import { debounce } from "@/common/utils/debounce.util";
import { useCallback, useContext, useState } from "react";
import { BiLoader } from "react-icons/bi";
import { IoMdCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";
import RegistrationStepContext from "../context/RegistrationContext";
import { verifySlug } from "../services/register.service";
import AuthErrorMassage from "./UI/AuthErrorMassage";
import { motion } from "framer-motion";

function ClaimUniqueLinkForm() {
  const [loading, setLoading] = useState(false);
  const {
    setStep,
    setSlugText,
    slugText,
    setIsSlugAvailable,
    isSlugAvailable,
  } = useContext(RegistrationStepContext);

  // Debounced function for verifying the slug
  const debouncedVerifySlug = useCallback(
    debounce(async (slug: string) => {
      if (slug.length === 0) {
        setIsSlugAvailable(undefined);
        return;
      }
      const response = await verifySlug(slug);
      setIsSlugAvailable(response.data.isAvailable);
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
      setIsSlugAvailable(undefined); // Reset availability when slug is empty
      setLoading(false);
      return;
    }
    debouncedVerifySlug(formattedSlug); // Pass formatted slug to debounced function
  };

  /**
   *  On claim button click set slug in local storage and navigate to login
   */
  const onClaimBtnClick = () => {
    if (!isSlugAvailable) {
      return;
    }
    setStep(2);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex h-full items-center lg:w-1/2"
    >
      <form className="flex flex-col gap-20">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold">First, claim your unique link</h1>
          <h1 className="text-xl text-gray-500">
            The good ones are still available!
          </h1>
        </div>
        <div className="w-full">
          <div className="flex w-full items-center rounded-md bg-gray-100 px-3">
            <label className="text-sm text-gray-500">profilepad.in/</label>
            <Input
              value={slugText}
              onChange={onTextChange}
              className="h-12 w-full border-0 p-0 !shadow-none outline-none focus-visible:ring-0"
              placeholder="your-name"
              containerClassName="w-full  border-0 focus-visible:ring-0"
            />

            {loading && (
              <BiLoader className="h-6 w-6 animate-spin justify-end text-gray-500" />
            )}
            {isSlugAvailable && slugText.length > 0 && (
              <IoMdCheckmark className="h-6 w-6 justify-end text-gray-500" />
            )}
          </div>
          <Button
            onClick={onClaimBtnClick}
            disabled={slugText.length === 0 || !isSlugAvailable} // Disable if slug is empty or not available
            className={`visible mt-5 w-full ${!isSlugAvailable && slugText.length > 0 ? "cursor-not-allowed" : ""}`}
          >
            Claim
          </Button>

          <AuthErrorMassage
            message="Slug is not available"
            show={isSlugAvailable === false}
          />
        </div>
        <div>
          <Link to="/login" className="text-xs text-gray-500">
            or log in
          </Link>
        </div>
      </form>
    </motion.div>
  );
}

export default ClaimUniqueLinkForm;
