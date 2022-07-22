import { useStore } from "./store/bears";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
};

export function Controls() {
  const { addUser, removeAllUsers } = useStore();
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    addUser({
      name: data.name,
      email: data.email,
    });

    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} />
        <input {...register("email")} />

        <button type="submit">Create User</button>
        <button onClick={removeAllUsers}>Remove All Users</button>
      </form>
    </>
  );
}
