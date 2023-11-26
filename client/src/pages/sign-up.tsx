import { SignUp } from "@features/user";

const SignUpPage = () => {
    return (
        <section className="bg-DarkGray w-full h-full rounded flex flex-col items-center justify-center p-5 text-white md:w-[50%] md:h-auto md:shadow-xl md:m-auto">
            <SignUp />
        </section>
    )
}

export default SignUpPage