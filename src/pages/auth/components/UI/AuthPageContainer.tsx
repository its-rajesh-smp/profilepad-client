function AuthPageContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex h-screen justify-between p-32 ${className}`}>
      {children}
    </div>
  );
}

export default AuthPageContainer;
