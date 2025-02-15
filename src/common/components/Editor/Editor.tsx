import {
  BlockNoteEditor,
  filterSuggestionItems,
  locales,
} from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import {
  BasicTextStyleButton,
  ColorStyleButton,
  CreateLinkButton,
  DefaultReactSuggestionItem,
  FormattingToolbar,
  FormattingToolbarController,
  getDefaultReactSlashMenuItems,
  SuggestionMenuController,
  useCreateBlockNote,
} from "@blocknote/react";
import "./style.css";

interface IEditor {
  className?: string;
  onChange?: (value: string) => void;
  value?: string;
  editable?: boolean;
  enableFormattingToolbar?: boolean;
  enableSlashMenu?: boolean;
}

function Editor({
  className,
  onChange,
  value,
  editable = true,
  enableFormattingToolbar = false,
  enableSlashMenu = false,
}: IEditor) {
  const initialContent: any = value || "";
  // We use the English, default dictionary
  const locale = locales["en"];

  // Create a BlockNote Editor
  const editor = useCreateBlockNote(
    {
      initialContent,
      dictionary: {
        ...locale,
        placeholders: {
          ...locale.placeholders,
          default: "Type something...",
        },
      },
    },
    [],
  );

  // List containing all default Slash Menu Items, as well as our custom one.
  const getCustomSlashMenuItems = (
    editor: BlockNoteEditor,
  ): DefaultReactSuggestionItem[] => {
    // List of allowed Slash Menu Items
    const allowedItemsKey = ["bullet_list", "numbered_list"];
    const items = [...getDefaultReactSlashMenuItems(editor)].filter(
      (item: any) => allowedItemsKey.includes(item.key),
    );
    return items;
  };

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
      {enableFormattingToolbar && <CustomFormattingToolbar />}

      {/* Custom Slash Menu */}
      {enableSlashMenu && (
        <SuggestionMenuController
          triggerCharacter={"/"}
          getItems={async (query) =>
            filterSuggestionItems(getCustomSlashMenuItems(editor), query)
          }
        />
      )}
    </BlockNoteView>
  );
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

export default Editor;
