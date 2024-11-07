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

interface FormattingToolbarProps {
  style: React.CSSProperties;
  setStyle: React.Dispatch<React.SetStateAction<React.CSSProperties>>;
}

export default function FormattingToolbar({
  style = {},
  setStyle,
}: FormattingToolbarProps) {
  const isEdit = useAppSelector((state) => state.authSlice.editMode);

  return (
    isEdit && (
      <Popover>
        <PopoverTrigger
          asChild
          className="no-drag absolute right-0 top-0 opacity-15 transition-all hover:cursor-pointer hover:opacity-100"
        >
          <Button variant="ghost" size="icon">
            <Type className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="no-drag flex gap-2">
          <Button
            variant={style.fontWeight === "bold" ? "default" : "ghost"}
            size="icon"
            onClick={() =>
              setStyle((prev) => ({ ...prev, fontWeight: "bold" }))
            }
            className="h-8 w-8"
          >
            <Bold className="h-4 w-4" />
          </Button>

          <Button
            variant={style.fontStyle === "italic" ? "default" : "ghost"}
            size="icon"
            onClick={() =>
              setStyle((prev) => ({ ...prev, fontStyle: "italic" }))
            }
            className="h-8 w-8"
          >
            <Italic className="h-4 w-4" />
          </Button>

          <Button
            variant={style.textAlign === "left" ? "default" : "ghost"}
            size="icon"
            onClick={() => setStyle((prev) => ({ ...prev, textAlign: "left" }))}
            className="h-8 w-8"
          >
            <AlignLeft className="h-4 w-4" />
          </Button>

          <Button
            variant={style.textAlign === "center" ? "default" : "ghost"}
            size="icon"
            onClick={() =>
              setStyle((prev) => ({ ...prev, textAlign: "center" }))
            }
            className="h-8 w-8"
          >
            <AlignCenter className="h-4 w-4" />
          </Button>

          <Button
            variant={style.textAlign === "right" ? "default" : "ghost"}
            size="icon"
            onClick={() =>
              setStyle((prev) => ({ ...prev, textAlign: "right" }))
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
                onChange={(e) =>
                  setStyle((prev) => ({ ...prev, color: e.target.value }))
                }
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
                  setStyle((prev) => ({
                    ...prev,
                    fontSize: Number(e.target.value),
                  }))
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
