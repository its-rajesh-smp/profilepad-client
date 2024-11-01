import Avatar from "@/common/components/UI/Avatar";

function Profile() {
  return (
    <div className=" _profile w-full lg:w-[30%] flex flex-col gap-2">
      <div className="flex flex-col justify-center w-full h-full items-center gap-4 ">
        <Avatar className="h-32 w-32" />
        <h1 className="lg:text-5xl text-center md:text-left font-bold text-3xl">
          Rajesh Singha Mahapatra
        </h1>
      </div>

      <div>
        <p className="lg:text-left text-center">
          Software Developer🧑‍💻| JavaScript📜|React⚛️|Java🍵|Git&Github🐈‍⬛{" "}
        </p>
      </div>
    </div>
  );
}

export default Profile;
