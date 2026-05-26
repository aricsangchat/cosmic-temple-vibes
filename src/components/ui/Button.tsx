import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={clsx(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition",
        variant === "primary"
          ? "bg-white text-black hover:bg-zinc-200"
          : "border border-white/20 text-white hover:bg-white/10",
        className
      )}
    >
      {children}
    </a>
  );
}
