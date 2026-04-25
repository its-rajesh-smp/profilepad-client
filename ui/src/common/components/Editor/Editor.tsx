import { useAppSelector } from "@/common/hooks/useAppSelector";
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
import { debounce } from "lodash";
import { useCallback } from "react";
import "./style.css";

interface IEditor {
  className?: string;
  onChange?: (value: string) => void;
  value?: string;
  enableFormattingToolbar?: boolean;
  enableSlashMenu?: boolean;
}

function Editor({
  className,
  onChange,
  value,
  enableFormattingToolbar = false,
  enableSlashMenu = false,
}: IEditor) {
  const { isAuthenticated } = useAppSelector((state) => state.authSlice);
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

  const debouncedUpdateOnDb = useCallback(
    debounce((jsonString: any) => {
      onChange?.(jsonString);
    }, 500),
    [onChange],
  );

  const onTextChange = () => {
    debouncedUpdateOnDb(editor.document as any);
  };

  const isEditable = isAuthenticated === true ? true : false;

  return (
    <BlockNoteView
      editable={isEditable}
      onChange={() => isEditable && onTextChange()}
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
