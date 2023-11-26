import { FormProps } from "@interfaces/index";

export const Form: React.FC<FormProps> = ({
  children,
  handleSubmit,
  ...props
}) => {
  return (
    <form {...props} onSubmit={handleSubmit} className="flex flex-col gap-5 w-full [&>fieldset>span]:text-red-500">
      {children}
    </form>
  );
};
