import { FieldProps } from "@interfaces/index"

export const Field: React.FC<FieldProps> = ({ icon, ...props }) => {
    return (
        <div>
            {icon}
            <input {...props} className="w-full p-1 rounded-sm text-black"/>
        </div>
    )
}