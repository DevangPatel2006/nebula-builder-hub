import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-display tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-cyan",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-transparent hover:bg-muted hover:text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Custom cosmic variants
        neon: "relative overflow-hidden bg-transparent border-2 border-primary text-primary hover:text-primary-foreground before:absolute before:inset-0 before:bg-primary before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-300 before:-z-10 shadow-glow-cyan hover:shadow-[0_0_40px_hsl(186_100%_50%/0.8)]",
        hero: "relative overflow-hidden bg-gradient-to-r from-neon-cyan to-neon-magenta text-background font-bold uppercase tracking-widest shadow-[0_0_30px_hsl(186_100%_50%/0.5),0_0_60px_hsl(300_100%_50%/0.3)] hover:shadow-[0_0_50px_hsl(186_100%_50%/0.8),0_0_80px_hsl(300_100%_50%/0.5)] hover:scale-105",
        glass: "bg-card/30 backdrop-blur-md border border-border/50 text-foreground hover:bg-card/50 hover:border-primary/50",
        cosmic: "bg-gradient-to-r from-cosmic-purple to-cosmic-blue text-foreground border border-primary/30 hover:border-primary shadow-glow-purple hover:shadow-glow-cyan",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
