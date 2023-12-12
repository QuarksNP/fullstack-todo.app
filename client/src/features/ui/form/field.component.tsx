interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactSVGElement;
  errorMessage?: string;
}

export const Field = ({
  children,
  icon,
  errorMessage,
  ...props
}: React.PropsWithChildren<FieldProps>) => {
  return (
    <fieldset>
      {children}
      <div>
        {icon}
        <input {...props} required className="w-full p-1 rounded-sm text-black" />
      </div>
      {errorMessage && <span>{errorMessage}</span>}
    </fieldset>
  );
};
