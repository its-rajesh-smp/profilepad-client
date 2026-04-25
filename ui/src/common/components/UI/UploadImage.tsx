"use client";

import { CircleUserRound } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "../shadcn/ui/button";

interface IUploadImageProps {
  onChange: (formData: FormData) => void;
  defaultImage?: string;
  isUploading?: boolean;
}

export default function UploadImage({
  onChange,
  defaultImage,
  isUploading = false,
}: IUploadImageProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(
    defaultImage || null,
  );
  const { handleRemove, fileName }: any = {};

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: any) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // Preview the image
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        setPreviewUrl(dataUrl);
      };
      reader.readAsDataURL(file);

      // Call the onChange prop to update the image
      const formData = new FormData();
      formData.append("image1", file);
      onChange(formData);
    }
  };

  return (
    <div>
      <div className="inline-flex items-center gap-2 align-top">
        <div
          className="border-input relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border"
          aria-label={
            previewUrl ? "Preview of uploaded image" : "Default user avatar"
          }
        >
          {previewUrl ? (
            <img
              className="h-full w-full object-cover"
              src={previewUrl}
              alt="Preview of uploaded image"
              width={32}
              height={32}
            />
          ) : (
            <div aria-hidden="true">
              <CircleUserRound
                className="opacity-60"
                size={16}
                strokeWidth={2}
              />
            </div>
          )}
        </div>
        <div className="relative inline-block">
          <Button
            onClick={handleButtonClick}
            aria-haspopup="dialog"
            loading={isUploading}
            size="sm"
          >
            {fileName ? "Change image" : "Upload image"}
          </Button>
          <input
            disabled={isUploading}
            ref={inputRef}
            type="file"
            onChange={handleFileChange}
            className="hidden"
            accept="image/*"
            aria-label="Upload image file"
          />
        </div>
      </div>
      {fileName && (
        <div className="mt-2">
          <div className="inline-flex gap-2 text-xs">
            <p className="text-muted-foreground truncate" aria-live="polite">
              {fileName}
            </p>{" "}
            <button
              onClick={handleRemove}
              className="font-medium text-red-500 hover:underline"
              aria-label={`Remove ${fileName}`}
            >
              Remove
            </button>
          </div>
        </div>
      )}
      <div className="sr-only" aria-live="polite" role="status">
        {previewUrl
          ? "Image uploaded and preview available"
          : "No image uploaded"}
      </div>
    </div>
  );
}
