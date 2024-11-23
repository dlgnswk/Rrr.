"use client";

import { PlateEditor } from "@/components/editor/plate-editor";
import { SettingsProvider } from "@/components/editor/settings";

import { Toaster } from "sonner";

export default function WritePage() {
  const onSubmit = () => {};

  return (
    <div className="flex flex-col mx-auto max-w-[80%] min-h-screen p-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="flex justify-between items-center gap-4 mb-4">
          <input
            type="text"
            className="w-full bg-sky h-10 border-b-2 border-black"
          />
          <button type="submit" className="font-honerThose">
            SAVE
          </button>
        </div>

        <div className="h-screen w-full" data-registry="plate">
          <SettingsProvider>
            <PlateEditor />
          </SettingsProvider>
          <Toaster />
        </div>
      </form>
    </div>
  );
}
