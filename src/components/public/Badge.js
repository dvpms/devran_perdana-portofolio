export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex rounded-sm border border-border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground ${className}`}
    >
      {children}
    </span>
  );
}

