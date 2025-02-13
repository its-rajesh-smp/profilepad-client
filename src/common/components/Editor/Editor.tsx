import { locales } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import {
  BasicTextStyleButton,
  ColorStyleButton,
  CreateLinkButton,
  FormattingToolbar,
  FormattingToolbarController,
  useCreateBlockNote,
} from "@blocknote/react";
import "./style.css";

interface IEditor {
  className?: string;
  onChange?: (value: string) => void;
  value?: string;
  editable?: boolean;
}

function CustomFormattingToolbar() {
  return (
    <FormattingToolbarController
      formattingToolbar={() => (
        <FormattingToolbar>
          <BasicTextStyleButton
            basicTextStyle={"bold"}
            key={"boldStyleButton"}
          />
          <BasicTextStyleButton
            basicTextStyle={"italic"}
            key={"italicStyleButton"}
          />
          <BasicTextStyleButton
            basicTextStyle={"underline"}
            key={"underlineStyleButton"}
          />
          <BasicTextStyleButton
            basicTextStyle={"strike"}
            key={"strikeStyleButton"}
          />
          {/* Extra button to toggle code styles */}
          <BasicTextStyleButton
            key={"codeStyleButton"}
            basicTextStyle={"code"}
          />

          <ColorStyleButton key={"colorStyleButton"} />

          <CreateLinkButton key={"createLinkButton"} />
        </FormattingToolbar>
      )}
    />
  );
}

function Editor({ className, onChange, value, editable = true }: IEditor) {
  const initialContent: any = value || "";
  // We use the English, default dictionary
  const locale = locales["en"];

  const editor = useCreateBlockNote(
    {
      initialContent,
      dictionary: {
        ...locale,
        placeholders: {
          ...locale.placeholders,
          // We override the default placeholder
          default: "Type something...",
        },
      },
    },
    [],
  );

  return (
    <BlockNoteView
      editable={editable}
      onChange={() => onChange?.(editor.document as any)}
      className={className}
      editor={editor}
      sideMenu={false}
      slashMenu={false}
      formattingToolbar={false}
      theme={{
        colors: {
          editor: {
            background: "inherit",
            text: "inherit",
          },
        },
      }}
    >
      {/* <CustomFormattingToolbar /> */}
    </BlockNoteView>
  );
}

export default Editor;
