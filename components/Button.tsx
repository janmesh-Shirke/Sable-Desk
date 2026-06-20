import Link from "next/link";
import { forwardRef } from "react";

type Variant = "hero" | "sable" | "default" | "secondary";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-sans font-medium transition-all duration-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  // amber gradient fill, elevated shadow, subtle scale on hover
  hero: "bg-gradient-amber text-sable-dark shadow-hero hover:shadow-hero-hover hover:scale-[1.02] active:scale-100",
  sable: "bg-sable text-cream hover:bg-sable-dark",
  default: "bg-sable text-cream hover:bg-sable-dark",
  secondary: "bg-amber text-sable-dark hover:bg-amber-dark hover:text-cream",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = "default", size = "md", className = "", children, ...props },
    ref
  ) {
    const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

    if ("href" in props && props.href) {
      const { href, ...rest } = props as ButtonAsLink;
      const isExternal = href.startsWith("http");
      if (isExternal) {
        return (
          <a
            href={href}
            className={classes}
            target="_blank"
            rel="noopener noreferrer"
            {...(rest as object)}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...(props as ButtonAsButton)}>
        {children}
      </button>
    );
  }
);
