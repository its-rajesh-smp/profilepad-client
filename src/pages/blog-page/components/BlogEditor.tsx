import Editor from "@/common/components/Editor/Editor";
import { SidebarTrigger } from "@/common/components/shadcn/ui/sidebar";

function BlogEditor() {
  return (
    <div className="flex h-screen w-full flex-col gap-5 p-5">
      <div className="flex gap-5">
        <SidebarTrigger iconClassName="!w-8 !h-8 " />
        <h1 className="text-2xl font-bold leading-tight text-zinc-900">
          How I scaled my personal website from 0 to 100k views in 4 months
        </h1>
      </div>
      <div className="px-8 md:px-20" id="blog-editor">
        <Editor className="leading-relaxed" />
      </div>
    </div>
  );
}

export default BlogEditor;
