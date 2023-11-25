import { VariantProps } from "class-variance-authority";
import { button } from "../features/user/ui/form/submit.style";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {}
export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    handleSubmit: (e?) => void;
}
export interface RedirectProps extends React.HTMLAttributes<HTMLDivElement> {
    to: string
    question: string
}