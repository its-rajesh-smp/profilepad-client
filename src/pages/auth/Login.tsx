import FloatingElementsContainer from "./components/FloatingElementsContainer";
import LoginForm from "./components/LoginForm";
import AuthPageContainer from "./components/UI/AuthPageContainer";

function Login() {
  return (
    <AuthPageContainer>
      <LoginForm />
      <FloatingElementsContainer />
    </AuthPageContainer>
  );
}

export default Login;
