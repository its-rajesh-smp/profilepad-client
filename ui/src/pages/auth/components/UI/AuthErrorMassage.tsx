import { motion } from "framer-motion";

interface IAuthErrorMassage {
  message: string;
  show: boolean;
}

function AuthErrorMassage({ message, show }: IAuthErrorMassage) {
  return (
    show && (
      <motion.p
        initial={{ opacity: 0, y: +10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-2 text-xs text-red-500"
      >
        Error: {message}
      </motion.p>
    )
  );
}

export default AuthErrorMassage;
