export const TagSolidCircle = ({ tag }: { tag: string }) => {
  return (
    <div className="w-fit flex items-center justify-center rounded-full border border-black bg-black py-0 px-3 text-[14px] font-medium text-white h-[21px]">
      {tag}
    </div>
  );
};

export const TagLineCircle = ({ tag }: { tag: string }) => {
  return (
    <div className="w-fit flex items-center justify-center rounded-full border border-black py-0 px-[10px] text-[14px] font-medium text-black h-[21px]">
      {tag}
    </div>
  );
};

export const TagSolidRectangle = ({ tag }: { tag: string }) => {
  return (
    <div className="w-fit flex items-center justify-center border border-black bg-black py-0 px-[2px] text-[14px] font-medium text-white h-[21px]">
      {tag}
    </div>
  );
};

export const TagLineRectangle = ({ tag }: { tag: string }) => {
  return (
    <div className="w-fit flex items-center justify-center border border-black py-0 px-[2px] text-[14px] font-medium text-black h-[21px]">
      {tag}
    </div>
  );
};
