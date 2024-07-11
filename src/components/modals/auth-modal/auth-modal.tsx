import React, { useState } from "react";
import { Button, Modal, Input, Form } from "rsuite";
import MainLogo from "./../../main-logo/main-logo.tsx";
import styles from "./auth-modal.module.scss";
import { useForm, Controller } from "react-hook-form";

type AuthModalType = {
  open: boolean;
  onClose: () => void;
};

type FieldText = {
  type: "text" | "password";
  value: string;
  name: string;
  onChange: () => void;
  onBlur: () => void;
  error?: string;
  placeholder?: string;
  size?: "lg" | "md" | "sm" | "xs";
};

const Field = (props: FieldText) => {
  return (
    <Form.Group>
      <Input
        type={props.type}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
        size={props.size || "md"}
      />
      <Form.ErrorMessage show={!!props.error} placement="bottomStart">
        {props.error}
      </Form.ErrorMessage>
    </Form.Group>
  );
};

const AuthModal = ({ open, onClose }: AuthModalType) => {
  const [isLogin, setIsLogin] = useState(true);

  const defaultValues = {
    email: "",
    password: "",
    username: "",
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    if (isLogin) {
      console.log("Login data:", data);
    } else {
      console.log("Registration data:", data);
    }
  };

  return (
    <Modal
      keyboard={false}
      open={open}
      onClose={onClose}
      dialogClassName={styles.modalBody}
      size="sm"
    >
      <Modal.Header className={styles.modalHeader}>
        <Button
          appearance="subtle"
          className={`${styles.modeButton} ${isLogin ? styles.active : styles.inactive}`}
          onClick={() => setIsLogin(true)}
        >
          Sign In
        </Button>
        <MainLogo className={styles.logo} />
        <Button
          appearance="subtle"
          className={`${styles.modeButton} ${!isLogin ? styles.active : styles.inactive}`}
          onClick={() => setIsLogin(false)}
        >
          Sign Up
        </Button>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.input}>
            {!isLogin && (
              <div className={styles.input}>
                <Controller
                  name="username"
                  rules={{
                    required: {
                      value: true,
                      message: "Please enter your username",
                    },
                  }}
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field
                      {...field}
                      error={errors[field.name]?.message}
                      placeholder="Enter your username"
                      size="sm"
                    />
                  )}
                />
              </div>
            )}

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
              render={({ field, fieldState }) => (
                <Field
                  {...field}
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
              render={({ field, fieldState }) => (
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
            {isLogin ? "Sign In" : "Sign Up"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;
