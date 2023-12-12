import React from "react";

import { Button, Spinner } from "@features/ui";
import Form from "@features/ui/form";

import { useCreatingUser } from "./use-creating-user.hook";
import { useRegisterValidate } from "./use-register-validate.hook";

export const SignUp = () => {
  const {
    errors: { fullname, username, password },
    handleChange,
  } = useRegisterValidate();

  const { isCreating, handleCreateUser } = useCreatingUser();

  const checked =
    fullname.available && username.available && password.available;

  const isAvailable = checked && !isCreating;

  return (
    <React.Fragment>
      <h1 className="text-3xl font-bold mb-10">Create account 🪪</h1>
      <Form method="post" onSubmit={handleCreateUser} onChange={handleChange}>
        <Form.FieldFullName
          id="fullname"
          name="fullname"
          errorMessage={fullname.msg}
        >
          <label htmlFor="fullname">Full name</label>
        </Form.FieldFullName>

        <Form.FieldUsername
          id="username"
          name="username"
          errorMessage={username.msg}
        >
          <label htmlFor="username">Username</label>
        </Form.FieldUsername>

        <Form.FieldPassword
          id="password"
          name="password"
          errorMessage={password.msg}
        >
          <label htmlFor="password">Password</label>
        </Form.FieldPassword>

        <Button {...{ intent: isAvailable ? "active" : "disabled" }}>
          {isCreating ? <Spinner /> : "Create account"}
        </Button>
      </Form>
    </React.Fragment>
  );
};
