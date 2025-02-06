"use client";

import { useRouter } from "next/navigation";

const HomepageTitle = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <h1
      className="md:text-title text-mobileTitle font-honerThose w-fit cursor-pointer"
      onClick={handleClick}
    >
      Rrr.
    </h1>
  );
};

export default HomepageTitle;
