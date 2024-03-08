export interface FormTextConfig {
  type: "text";
  key: string;
  displayName: string;
}

export interface FormPasswordConfig {
  type: "password";
  key: string;
  displayName: string;
  secureTextEntry?: boolean; // Useful for passwords
}

export interface FormHeaderConfig {
  type: "header";
  key: string;
  displayName: string;
}

export interface FormButtonConfig {
  type: "button"; // Distinguishes button config from other field types
  key: string; // Unique identifier for the button, primarily for React key prop
  title: string; // Display title of the button
  callback: (formData: Record<string, any>) => void; // Callback to be invoked with the form's current data
}

export type FormField =
  | FormHeaderConfig
  | FormTextConfig
  | FormPasswordConfig
  | FormButtonConfig;
