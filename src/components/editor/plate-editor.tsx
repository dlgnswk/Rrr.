"use client";

import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { Plate } from "@udecode/plate-common/react";

import { useCreateEditor } from "@/components/editor/use-create-editor";
import { SettingsDialog } from "@/components/editor/settings";
import { Editor, EditorContainer } from "@/components/plate-ui/editor";
import { Toolbar } from "@radix-ui/react-toolbar";

export function PlateEditor() {
  const editor = useCreateEditor();

  const handleChange = (content: any) => {
    console.log(content);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Plate editor={editor} onChange={handleChange}>
        <EditorContainer>
          <Toolbar />
          <div className="border border-input rounded-md">
            <Editor className="min-h-[150px] focus:outline-none" />
          </div>
        </EditorContainer>
        <SettingsDialog />
      </Plate>
    </DndProvider>
  );
}
