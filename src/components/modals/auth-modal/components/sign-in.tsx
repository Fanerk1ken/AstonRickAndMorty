import { Button, Form } from "rsuite";
import { Controller } from "react-hook-form";
import Field from "./field.tsx";
import styles from "./../auth-modal.module.scss";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../../app/store.ts";
import { SignInData } from "../../../../types/modal-types.ts";
import { signInReducer } from "../../../../redux/auth-slice.ts";

const SignIn = () => {
  const defaultValues = {
    email: "",
    password: "",
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit((data: SignInData) => {
    console.log("awdaw");
    dispatch(signInReducer(data));
  });
  return (
    <Form onSubmit={onSubmit}>
      <div className={styles.input}>
        <Controller
          name="email"
          rules={{
            required: {
              value: true,
              message: "Please enter your email",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
          control={control}
          render={({ field }) => (
            <Field
              {...field}
              type={"text"}
              error={errors[field.name]?.message}
              placeholder="Enter your email"
              size="sm"
            />
          )}
        />
      </div>

      <div className={`${styles.input} ${styles.lastInput}`}>
        <Controller
          name="password"
          rules={{
            required: {
              value: true,
              message: "Please enter your password",
            },
            minLength: {
              value: 5,
              message: "Password must be at least 5 characters",
            },
          }}
          control={control}
          render={({ field }) => (
            <Field
              {...field}
              type="password"
              error={errors[field.name]?.message}
              placeholder="Enter your password"
              size="sm"
            />
          )}
        />
      </div>
      <Button
        appearance="primary"
        type="submit"
        className={styles.submitButton}
      >
        Sign In
      </Button>
    </Form>
  );
};

export default SignIn;
