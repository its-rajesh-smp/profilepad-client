import Avatar from "@/common/components/UI/Avatar";

function Profile() {
  return (
    <div className="flex w-full flex-col gap-2 lg:w-[30%]">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 lg:items-start">
        <Avatar className="h-32 w-32" />
        <h1 className="text-center text-3xl font-bold md:text-left lg:text-5xl">
          Rajesh Singha Mahapatra
        </h1>
      </div>

      <div>
        <p className="text-center lg:text-left">
          Software Developer🧑‍💻| JavaScript📜|React⚛️|Java🍵|Git&Github🐈‍⬛{" "}
        </p>
      </div>
    </div>
  );
}

export default Profile;
