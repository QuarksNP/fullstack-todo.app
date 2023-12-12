import { Field } from "./field.component";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export function Form({
  children,
  onSubmit,
  ...props
}: React.PropsWithChildren<FormProps>) {
  return (
    <form
      {...props}
      onSubmit={onSubmit}
      className="flex flex-col gap-5 w-full [&>fieldset>span]:text-red-500"
    >
      {children}
    </form>
  );
}

Form.FieldFullName = Field;
Form.FieldUsername = Field;
Form.FieldPassword = Field;
