export type AuthModalType = {
  open: boolean;
  onClose: () => void;
};

export type FieldText = {
  type: "text" | "password";
  value: string;
  name: string;
  onChange: () => void;
  onBlur: () => void;
  error?: string;
  placeholder?: string;
  size?: "lg" | "md" | "sm" | "xs";
};

export type SignInData = {
  email: string;
  password: string;
};
