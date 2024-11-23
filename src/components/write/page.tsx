import { PlateEditor } from "@/components/editor/plate-editor";

export default function Page() {
  return (
    <div className="h-screen w-full" data-registry="plate">
      <h1>Write</h1>
      <PlateEditor />
    </div>
  );
}
