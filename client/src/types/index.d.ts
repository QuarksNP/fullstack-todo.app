type Data = {
    fullname?: FormDataEntryValue | string,
    username: FormDataEntryValue | string,
    password: FormDataEntryValue | string
}

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    handleSubmit: (e?) => void;
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