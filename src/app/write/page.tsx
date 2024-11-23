"use client";

export default function WritePage() {
  const onSubmit = () => {};

  return (
    <div className="flex flex-col mx-auto h-screen w-[80%]">
      <div className="flex justify-between items-center gap-4">
        <input
          type="text"
          className="w-full bg-sky h-10 border-b-2 border-black"
        />
        <button type="submit" onClick={onSubmit} className="font-honerThose">
          SAVE
        </button>
      </div>
      <form className="text-center w-full h-full"></form>
    </div>
  );
}
