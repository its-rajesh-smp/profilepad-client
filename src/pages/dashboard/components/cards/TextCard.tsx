function TextCard({ id }: { id: string }) {
  return (
    <div className="flex h-full w-full items-center bg-white p-3 text-xl font-semibold">
      {id}
    </div>
  );
}

export default TextCard;
