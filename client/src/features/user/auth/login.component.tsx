import { Form, Button, Field, Redirect } from "@features/ui";

import { useLogger } from "../use-logger.hook";

export const Login = () => {
  const { handlePostUser } = useLogger("login")

  return (
    <article className="w-full p-10">
      <h1 className="text-3xl font-bold mb-10 text-center">
        Welcome to Todo-app 📝
      </h1>

      <Form handleSubmit={handlePostUser} method="post">
        <fieldset>
          <label htmlFor="username">Username</label>
          <Field name="username" id="username" required />
        </fieldset>

        <fieldset>
          <label htmlFor="password">Password</label>
          <Field name="password" id="password" required />
        </fieldset>

        <Button {...{ intent: "active" }}>Login</Button>
      </Form>

      <Redirect to="/sign-up" question="Do not you have an account?">
        <button id="btn-redirect" className="text-BrightBlue hover:underline">
          Create account
        </button>
      </Redirect>
    </article>
  );
};
