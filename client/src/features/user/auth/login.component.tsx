import { Button, Redirect, Spinner } from "@features/ui";

import Form from "@features/ui/form";

import { useLoggerUser } from "./use-logger-user.hook";
import { useLoginValidator } from "./use-login-validate.hook";

export const Login = () => {
  const {
    emptyFields: { username, password },
    handleChange,
  } = useLoginValidator();
  const { isLogging, handlePostUser } = useLoggerUser();

  const isNotEmpty = !username && !password;
  const isAvailable = isNotEmpty && !isLogging;

  return (
    <article className="w-full p-10">
      <h1 className="text-3xl font-bold mb-10 text-center">
        Welcome to Todo-app 📝
      </h1>

      <Form method="post" onSubmit={handlePostUser} onChange={handleChange}>
        <Form.FieldUsername id="username" name="username">
          <label htmlFor="username">Username</label>
        </Form.FieldUsername>

        <Form.FieldPassword id="password" name="password">
          <label htmlFor="password">Password</label>
        </Form.FieldPassword>

        <Button {...{ intent: isAvailable ? "active" : "disabled" }}>
          {isLogging ? <Spinner /> : "Create account"}
        </Button>
      </Form>

      <Redirect to="/sign-up" question="Do not you have an account?">
        <button id="btn-redirect" className="text-BrightBlue hover:underline">
          Create account
        </button>
      </Redirect>
    </article>
  );
};
