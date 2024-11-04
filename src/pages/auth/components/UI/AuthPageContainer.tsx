function AuthPageContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex h-screen items-center justify-center gap-5 p-10 md:p-5 lg:justify-between lg:p-32 ${className}`}
    >
      {children}
    </div>
  );
}

export default AuthPageContainer;
