export function Card({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={classNames("rounded-lg border p-4 shadow-sm bg-white dark:bg-gray-800", className)}
    >
      {children}
    </div>
  );
}
