import React, { Dispatch, createContext, useState } from "react";

interface IRegistrationContext {
  step: number;
  setStep: Dispatch<React.SetStateAction<number>>;
  slugText: string;
  setSlugText: Dispatch<React.SetStateAction<string>>;
  setIsSlugAvailable: Dispatch<React.SetStateAction<boolean | undefined>>;
  isSlugAvailable: boolean | undefined;
}
const initialContextValue: IRegistrationContext = {
  step: 0,
  setStep: () => {},
  slugText: "",
  setSlugText: () => {},
  setIsSlugAvailable: () => {},
  isSlugAvailable: undefined,
};

const RegistrationContext = createContext(initialContextValue);

export const RegistrationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [step, setStep] = useState(1);
  const [slugText, setSlugText] = useState("");
  const [isSlugAvailable, setIsSlugAvailable] = useState<boolean | undefined>(
    undefined,
  );

  return (
    <RegistrationContext.Provider
      value={{
        step,
        setStep,
        slugText,
        setSlugText,
        isSlugAvailable,
        setIsSlugAvailable,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

export default RegistrationContext;
