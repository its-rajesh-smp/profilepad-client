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
      {/* <img
        className="pointer-events-none fixed bottom-5 left-5 z-0 h-80 w-80 pr-2 opacity-5"
        src={APP_ICON}
      /> */}
    </div>
  );
}

export default AuthPageContainer;
