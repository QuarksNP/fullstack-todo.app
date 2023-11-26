import { VariantProps } from "class-variance-authority";
import { button } from "../features/ui/form/submit.style";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {}
export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    handleSubmit: (e?) => void;
}
export interface RedirectProps extends React.HTMLAttributes<HTMLDivElement> {
    to: string
    question: string
}

export interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement>{
    icon?: React.ReactSVGElement
}

export interface Data {
    data: {
        fullname: string
        username: string
        password: string
    }
}