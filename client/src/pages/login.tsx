import { CoverImage, Login } from "@features/user"
const LoginPage = () => {
    return(
        <section className="md:grid md:grid-cols-2 bg-DarkGray w-full h-full rounded flex flex-col items-center justify-center text-white md:h-auto md:shadow-xl md:m-auto">
            <CoverImage />
            <Login />
        </section>
    )
}

export default LoginPage