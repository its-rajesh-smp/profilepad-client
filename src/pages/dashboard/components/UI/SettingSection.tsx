import { CiAlignCenterV } from "react-icons/ci";

function SettingSection() {
  return (
    <>
      <div className="flex items-center gap-2">
        <p className="text-3xl text-gray-500">{<CiAlignCenterV />}</p>
        <p className="text-sm font-semibold">Profile Alignment</p>
      </div>
    </>
  );
}

export default SettingSection;
