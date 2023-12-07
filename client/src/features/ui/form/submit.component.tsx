import { ButtonProps } from "@interfaces/index";

import { button } from "./submit.style";

export const Button: React.FC<ButtonProps> = ({
  intent,
  size,
  className,
  children,
  ...props
}) => {
  return (
    <button id="submit" className={button({ intent, size, className })} {...props}>
      {children}
    </button>
  );
};
