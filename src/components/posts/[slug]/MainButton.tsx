"use client";

import { useRouter } from "next/navigation";

const MainButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="flex w-full my-1 items-center">
      <button
        className="text-[40px] font-honerThose w-fit cursor-pointer"
        onClick={handleClick}
      >
        Rrr.
      </button>
    </div>
  );
};

export default MainButton;
