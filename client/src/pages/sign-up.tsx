import { Redirect } from "@features/ui";
import { SignUp } from "@features/user";

const SignUpPage = () => {
    return (
        <section className="bg-DarkGray w-full h-full rounded flex flex-col items-center justify-center p-10 text-white md:w-[50%] md:h-auto md:shadow-xl md:m-auto">
            <SignUp />
            <Redirect to="/login" question="Do you already have an account?">
                <button id="btn-redirect" className="text-BrightBlue hover:underline">Sign in</button>
            </Redirect>
        </section>
    )
}

export default SignUpPage