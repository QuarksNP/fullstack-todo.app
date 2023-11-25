import { FormProps } from "@interfaces/index";

export const Form: React.FC<FormProps> = ({
  children,
  handleSubmit,
  ...props
}) => {
  return (
    <form {...props} onSubmit={handleSubmit} className="flex flex-col">
      {children}
    </form>
  );
};
