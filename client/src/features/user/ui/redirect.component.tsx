import { RedirectProps } from "@interfaces/index"

import { Link } from "wouter"

export const Redirect: React.FC<RedirectProps> = ({ children, question, to }) => {
    return (
        <div className="mt-5 flex gap-3">
            {question}
            <Link href={to}>
                {children}
            </Link>
        </div>
    )
}