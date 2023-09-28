import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  username: string;
  email: string;
  password: string;
}
const passwordPattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%^&+=!])(?!.*\s).{8,20}$/;

const onSubmit: SubmitHandler<FormData> = (data) =>
  alert(` user name :${data.username} email: ${data.email} `);

function RegularForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>React Hook Form</h1>
      <div>
        <input
          placeholder="enter user name"
          {...register("username", {
            required: true,
            maxLength: 20,
            minLength: 2,
          })}
        />
        {errors.username && "username is required"}
      </div>
      <div>
        <input
          type="email"
          placeholder="enter email"
          {...register("email", {
            required: true,
            minLength: 7,
          })}
        />
      </div>
      <div>
        <input
          placeholder="enter password"
          {...register("password", {
            required: true,
            pattern: passwordPattern,
          })}
        />
        {errors.password && "password is required"}
      </div>
      <input type="submit" />
    </form>
  );
}

export default RegularForm;
