import FloatingElementsContainer from "./components/FloatingElementsContainer";
import RegistrationForm from "./components/RegistrationForm";
import AuthPageContainer from "./components/UI/AuthPageContainer";

function Register() {
  return (
    <AuthPageContainer>
      <RegistrationForm />
      <FloatingElementsContainer />
    </AuthPageContainer>
  );
}

export default Register;
