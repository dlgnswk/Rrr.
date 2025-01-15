"use client";

import { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useTheme } from "next-themes";

interface EditorProps {
  initialValue?: string;
  onChange: (content: any) => void;
}

const TinyEditor = ({ initialValue = "", onChange }: EditorProps) => {
  const { theme } = useTheme();
  const [editorLoaded, setEditorLoaded] = useState(false);

  const handleEditorChange = (content: string) => {
    try {
      const parsedContent = JSON.parse(content);
      onChange(parsedContent);
    } catch (e) {
      onChange(content);
    }
  };

  useEffect(() => {
    const loadTinyMCE = async () => {
      await import("tinymce");
      await Promise.all([
        import("tinymce/models/dom"),
        import("tinymce/themes/silver"),
        import("tinymce/icons/default"),
        import("tinymce/plugins/advlist"),
        import("tinymce/plugins/autolink"),
        import("tinymce/plugins/lists"),
        import("tinymce/plugins/link"),
        import("tinymce/plugins/image"),
        import("tinymce/plugins/autoresize"),
      ]);
      setEditorLoaded(true);
    };

    loadTinyMCE();
  }, []);

  if (!editorLoaded) {
    return <div>로딩중...</div>;
  }

  return (
    <div className="flex flex-col gap-2 h-full">
      <Editor
        tinymceScriptSrc="/tinymce/tinymce.min.js"
        initialValue={initialValue}
        init={{
          setup: (editor) => {
            editor.on("change", () => {
              handleEditorChange(editor.getContent());
            });
          },
          base_url: "/tinymce",
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "autoresize",
          ],
          toolbar: "undo redo | formatselect | styles | fontsize | image",
          fontsize_formats: "8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt",
          skin: theme === "dark" ? "tinymce-5-dark" : "tinymce-5",
          content_css:
            theme === "dark"
              ? "/tinymce/skins/content/tinymce-5-dark/content.css"
              : "/tinymce/skins/content/tinymce-5/content.css",
          height: initialValue === "" ? "100%" : undefined,
          min_height: initialValue === "" ? window.innerHeight : 400,
          max_height: initialValue === "" ? window.innerHeight : 1000,
          automatic_uploads: true,
          file_picker_types: "image",
        }}
      />
    </div>
  );
};

export default TinyEditor;
