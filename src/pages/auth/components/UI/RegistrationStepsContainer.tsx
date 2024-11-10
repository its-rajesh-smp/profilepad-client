import { useContext } from "react";
import RegistrationStepContext from "../../context/RegistrationContext";
import ClaimUniqueLinkForm from "../ClaimUniqueLinkForm";
import CreateNewAccountForm from "../CreateNewAccountForm";

function RegistrationStepsContainer() {
  const { step } = useContext(RegistrationStepContext);
  return (
    <>
      {step === 1 && <ClaimUniqueLinkForm />}
      {step === 2 && <CreateNewAccountForm />}
    </>
  );
}

export default RegistrationStepsContainer;
