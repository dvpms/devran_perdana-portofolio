export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex rounded-sm border border-border bg-blue-50 px-2.5 py-1 text-xs font-medium text-green-500 ${className}`}
    >
      {children}
    </span>
  );
}

