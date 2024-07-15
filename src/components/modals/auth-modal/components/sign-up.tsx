import { Button, Form } from "rsuite";
import { Controller } from "react-hook-form";
import Field from "./field.tsx";
import styles from "./../auth-modal.module.scss";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../../app/store.ts";
import { signUpAsync } from "../../../../redux/auth-slice.ts";
import { SignInData } from "../../../../types/modal-types.ts";

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const dispatch = useAppDispatch();

  const onSubmit = (data: SignInData) => {
    dispatch(signUpAsync(data));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.input}>
        <Controller
          name="email"
          control={control}
          defaultValue="" // Ensure the input is controlled from the start
          rules={{
            required: "Please enter your email",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address",
            },
          }}
          render={({ field, fieldState }) => (
            <Field
              {...field}
              type="text"
              error={fieldState.error?.message}
              placeholder="Enter your email"
              size="sm"
            />
          )}
        />
      </div>
      <div className={styles.input}>
        <Controller
          name="password"
          control={control}
          defaultValue="" // Ensure the input is controlled from the start
          rules={{
            required: "Please enter your password",
            minLength: {
              value: 5,
              message: "Password must be at least 5 characters",
            },
          }}
          render={({ field, fieldState }) => (
            <Field
              {...field}
              type="password"
              error={fieldState.error?.message}
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
        Sign Up
      </Button>
    </Form>
  );
};

export default SignUp;
