import { useNavigate } from "react-router-dom";

function CreateProfileBtn() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/register");
      }}
      className="relative mt-6 p-[3px]"
    >
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
      <div className="group relative rounded-[6px] bg-black px-8 py-2 text-white transition duration-200 hover:bg-transparent">
        Create Profile
      </div>
    </button>
  );
}

export default CreateProfileBtn;
