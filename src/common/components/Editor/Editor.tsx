// @ts-nocheck
// @ts-ignore
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import "./style.css";

interface IEditor {
  className?: string;
  onChange?: (value: string) => void;
  value?: string;
  editable?: boolean;
}

function Editor({ className, onChange, value, editable = true }: IEditor) {
  const initialContent = value || "";

  const editor = useCreateBlockNote(
    {
      initialContent,
    },
    [value],
  );

  return (
    <BlockNoteView
      editable={editable}
      onChange={() => onChange?.(editor.document as any)}
      className={className}
      editor={editor}
    />
  );
}

export default Editor;
