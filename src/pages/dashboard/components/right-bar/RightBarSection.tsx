import { Separator } from "@/common/components/shadcn/ui/separator";

function RightBarSection({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-4`}>
      <div className={`flex flex-col gap-4 ${className}`}>
        <p className="text-xs font-medium text-primary">{title}</p>
        {children}
      </div>
      <Separator />
    </div>
  );
}

export default RightBarSection;
