"use client";

import { useRouter } from "next/navigation";

const MainButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="flex w-full pt-4 pb-2 items-center fixed bg-[#73BBE7]">
      <button
        className="flex items-center text-[40px] h-[40px] font-honerThose w-fit cursor-pointer"
        onClick={handleClick}
      >
        Rrr.
      </button>
    </div>
  );
};

export default MainButton;
