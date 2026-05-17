export default function SectionHeading({ icon: Icon, title }) {
  return (
    <h2 className="flex items-center gap-2 text-2xl font-semibold text-foreground">
      {Icon ? <Icon className="h-5 w-5 text-muted-foreground" aria-hidden="true" /> : null}
      {title}
    </h2>
  );
}

