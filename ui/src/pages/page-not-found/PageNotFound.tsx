import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  const onClickCreate = () => navigate("/register");

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-2">
      <div className="flex flex-col items-center justify-center gap-1">
        <h1 className="text-5xl">404</h1>
        <h1 className="text-3xl">Page not found</h1>
        <div>
          <p>BTW, you can create a profile 🙂</p>
        </div>
      </div>
      <div>
        <button
          onClick={onClickCreate}
          className="rounded-md border border-black bg-white px-4 py-2 text-sm text-black transition duration-200 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)]"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
