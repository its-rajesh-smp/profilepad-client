import { Button } from "@/common/components/shadcn/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/common/components/shadcn/ui/popover";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Palette,
  Type,
} from "lucide-react";
import { motion } from "framer-motion";
import { updateLayoutItem } from "@/pages/dashboard/services/layout-item.service";
import { debounce } from "@/common/utils/debounce.util";
import { useCallback } from "react";

interface FormattingToolbarProps {
  style: React.CSSProperties;
  setStyle: React.Dispatch<React.SetStateAction<React.CSSProperties>>;
  itemId: string;
}

// FIXME: Need to fix the debounced update
export default function FormattingToolbar({
  style,
  setStyle,
  itemId,
}: FormattingToolbarProps) {
  const isEdit = useAppSelector((state) => state.authSlice.editMode);
  const debouncedUpdateOnDb = useCallback(
    debounce((id: string, data: any) => updateLayoutItem(id, data), 500),
    [],
  );

  const handleStyleChange = async (style: any) => {
    setStyle((prevStyle: React.CSSProperties) => {
      const updatedStyle = { ...prevStyle, ...style };
      debouncedUpdateOnDb(itemId, { style: updatedStyle });
      return updatedStyle;
    });
  };

  return (
    isEdit && (
      <Popover>
        <PopoverTrigger
          asChild
          className="no-drag absolute -right-2 -top-2 opacity-15 transition-all hover:cursor-pointer hover:opacity-100"
        >
          <motion.button
            initial={{ opacity: 0 }}
            whileTap={{ scale: 0.7 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex h-8 w-8 items-center justify-center rounded-full !bg-white shadow-md"
          >
            <Type className="h-4 w-4" />
          </motion.button>
        </PopoverTrigger>
        <PopoverContent className="no-drag flex gap-2">
          <Button
            variant={style.fontWeight === "bold" ? "default" : "ghost"}
            size="icon"
            onClick={() => handleStyleChange({ fontWeight: "bold" })}
            className="h-8 w-8"
          >
            <Bold className="h-4 w-4" />
          </Button>

          <Button
            variant={style.fontStyle === "italic" ? "default" : "ghost"}
            size="icon"
            onClick={() => handleStyleChange({ fontStyle: "italic" })}
            className="h-8 w-8"
          >
            <Italic className="h-4 w-4" />
          </Button>

          <Button
            variant={style.textAlign === "left" ? "default" : "ghost"}
            size="icon"
            onClick={() =>
              handleStyleChange({
                textAlign: style.textAlign === "left" ? "center" : "left",
              })
            }
            className="h-8 w-8"
          >
            <AlignLeft className="h-4 w-4" />
          </Button>

          <Button
            variant={style.textAlign === "center" ? "default" : "ghost"}
            size="icon"
            onClick={() =>
              handleStyleChange({
                textAlign: style.textAlign === "center" ? "left" : "center",
              })
            }
            className="h-8 w-8"
          >
            <AlignCenter className="h-4 w-4" />
          </Button>

          <Button
            variant={style.textAlign === "right" ? "default" : "ghost"}
            size="icon"
            onClick={() =>
              handleStyleChange({
                textAlign: style.textAlign === "right" ? "left" : "right",
              })
            }
            className="h-8 w-8"
          >
            <AlignRight className="h-4 w-4" />
          </Button>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Palette className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-32 p-2">
              <input
                type="color"
                value={style.color}
                onChange={(e) => handleStyleChange({ color: e.target.value })}
                className="h-8 w-full"
              />
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Type className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="no-drag w-32 p-2">
              <input
                type="range"
                min="12"
                max="24"
                value={style.fontSize || 16}
                onChange={(e) =>
                  handleStyleChange({ fontSize: Number(e.target.value) })
                }
                className="w-full"
              />
            </PopoverContent>
          </Popover>
        </PopoverContent>
      </Popover>
    )
  );
}
