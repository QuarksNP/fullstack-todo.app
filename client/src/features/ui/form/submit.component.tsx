import { VariantProps } from "class-variance-authority";
import { button } from "./submit.style";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button = ({
  intent,
  size,
  className,
  children,
  ...props
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button
      id="submit"
      className={button({ intent, size, className })}
      {...props}
    >
      {children}
    </button>
  );
};
