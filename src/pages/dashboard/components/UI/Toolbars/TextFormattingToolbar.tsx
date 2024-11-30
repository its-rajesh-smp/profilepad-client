import { Button } from "@/common/components/shadcn/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/common/components/shadcn/ui/popover";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { debounce } from "@/common/utils/debounce.util";
import GridItemContext from "@/pages/dashboard/context/gridItemContext";
import { updateLayoutItem } from "@/pages/dashboard/services/layout-item.service";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Palette,
  Type,
} from "lucide-react";
import { useCallback, useContext } from "react";

export default function FormattingToolbar() {
  const { itemStyle, setItemStyle, item } = useContext(GridItemContext);

  const isEdit = useAppSelector((state) => state.authSlice.editMode);
  const debouncedUpdateOnDb = useCallback(
    debounce((id: string, data: any) => updateLayoutItem(id, data), 500),
    [],
  );

  const handleStyleChange = async (style: any) => {
    setItemStyle((prevStyle: React.CSSProperties) => {
      const updatedStyle = { ...prevStyle, ...style };
      debouncedUpdateOnDb(item?.id, { style: updatedStyle });
      return updatedStyle;
    });
  };

  return (
    isEdit && (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="default" size="icon" icon={<Type />} />
        </PopoverTrigger>
        <PopoverContent sideOffset={0} className="no-drag flex gap-2">
          <Button
            variant={itemStyle.fontWeight === "bold" ? "default" : "ghost"}
            size="icon"
            onClick={() =>
              handleStyleChange({
                fontWeight: itemStyle.fontWeight === "bold" ? "" : "bold",
              })
            }
            className="h-8 w-8"
          >
            <Bold className="h-4 w-4" />
          </Button>

          <Button
            variant={itemStyle.fontStyle === "italic" ? "default" : "ghost"}
            size="icon"
            onClick={() =>
              handleStyleChange({
                fontStyle: itemStyle.fontStyle === "italic" ? "" : "italic",
              })
            }
            className="h-8 w-8"
          >
            <Italic className="h-4 w-4" />
          </Button>

          <Button
            variant={itemStyle.textAlign === "left" ? "default" : "ghost"}
            size="icon"
            onClick={() =>
              handleStyleChange({
                textAlign: itemStyle.textAlign === "left" ? "" : "left",
              })
            }
            className="h-8 w-8"
          >
            <AlignLeft className="h-4 w-4" />
          </Button>

          <Button
            variant={itemStyle.textAlign === "center" ? "default" : "ghost"}
            size="icon"
            onClick={() =>
              handleStyleChange({
                textAlign: itemStyle.textAlign === "center" ? "" : "center",
              })
            }
            className="h-8 w-8"
          >
            <AlignCenter className="h-4 w-4" />
          </Button>

          <Button
            variant={itemStyle.textAlign === "right" ? "default" : "ghost"}
            size="icon"
            onClick={() =>
              handleStyleChange({
                textAlign: itemStyle.textAlign === "right" ? "" : "right",
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
                value={itemStyle.color}
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
                value={itemStyle.fontSize || 16}
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
