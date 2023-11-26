import React from "react";

import { Form, Field, Button } from "@features/ui";
import { handlePostUser } from "./handle-post-user.util";
import { HandleFieldValidation } from "./handle-field-validation.hook";

export const SignUp = () => {
  const {
    errors: { fullname, username, password },
    handleChange,
  } = HandleFieldValidation();

  const checked =
    fullname.available && username.available && password.available;

  return (
    <React.Fragment>
      <h1 className="text-3xl font-bold mb-10">Create account 🪪</h1>
      <Form
        handleSubmit={(e) => handlePostUser(e, "signup")}
        method="post"
        onChange={handleChange}
      >
        <fieldset>
          <label htmlFor="fullname">Full name</label>
          <Field name="fullname" id="fullname" />
          <span>{fullname.msg}</span>
        </fieldset>

        <fieldset>
          <label htmlFor="username">Username</label>
          <Field name="username" id="username" />
          <span>{username.msg}</span>
        </fieldset>

        <fieldset>
          <label htmlFor="password">Password</label>
          <Field name="password" id="password" />
          <span>{password.msg}</span>
        </fieldset>

        {checked ? (
          <Button {...{ intent: "active" }}>Create account</Button>
        ) : (
          <Button {...{ intent: "disabled" }}>Check your fields</Button>
        )}
      </Form>
    </React.Fragment>
  );
};
