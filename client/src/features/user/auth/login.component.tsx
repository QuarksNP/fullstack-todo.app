import { Form, Button, Field } from "@features/ui";

import { handlePostUser } from "../handle-post-user.util";

export const Login = () => {

  return (
    <article className="md:p-10">
      <h1 className="text-3xl font-bold mb-10 text-center">Welcome to Todo-app 📝</h1>

      <Form
        handleSubmit={(e) => handlePostUser(e, "login")}
        method="post"
      >
        <fieldset>
          <label htmlFor="username">Username</label>
          <Field name="username" id="username" required/>
        </fieldset>

        <fieldset>
          <label htmlFor="password">Password</label>
          <Field name="login-pas" id="password" required/>
        </fieldset>

          <Button {...{ intent: "active" }}>Login</Button>
       
      </Form>
    </article>
  );
};
