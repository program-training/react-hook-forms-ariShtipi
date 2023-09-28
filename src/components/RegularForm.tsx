import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface FormData {
  username: string;
  email: string;
  password: string;
}

const passwordPattern: RegExp =
  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%^&+=!])(?!.*\s).{8,20}$/;
const emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const onSubmit: SubmitHandler<FormData> = (data) =>
  alert(`Username: ${data.username}, Email: ${data.email}`);

function RegularForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    criteriaMode: "all",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>React Hook Form</h1>
      <div>
        <input
          placeholder="Enter username"
          {...register("username", {
            required: "Username is required.",
            maxLength: {
              value: 20,
              message: "Username must not exceed 20 characters.",
            },
            minLength: {
              value: 2,
              message: "Username must be at least 2 characters.",
            },
          })}
        />
        <ErrorMessage errors={errors} name="username" as="p" />
      </div>
      <div>
        <input
          placeholder="Enter email"
          {...register("email", {
            required: "Email is required.",
            pattern: {
              value: emailPattern,
              message: "Invalid email address.",
            },
          })}
        />
        <ErrorMessage errors={errors} name="email" as="p" />
      </div>
      <div>
        <input
          type="password"
          placeholder="Enter password"
          {...register("password", {
            required: "Password is required.",
            pattern: {
              value: passwordPattern,
              message: "Invalid password.",
            },
          })}
        />
        <ErrorMessage errors={errors} name="password" as="p" />
      </div>

      <input type="submit" />
    </form>
  );
}

export default RegularForm;
