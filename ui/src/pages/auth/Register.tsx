import FloatingElementsContainer from "./components/FloatingElementsContainer";
import AuthPageContainer from "./components/UI/AuthPageContainer";
import RegistrationStepsContainer from "./components/UI/RegistrationStepsContainer";
import { RegistrationContextProvider } from "./context/RegistrationContext";

function Register() {
  return (
    <AuthPageContainer>
      <RegistrationContextProvider>
        <RegistrationStepsContainer />
      </RegistrationContextProvider>
      <FloatingElementsContainer />
    </AuthPageContainer>
  );
}

export default Register;
