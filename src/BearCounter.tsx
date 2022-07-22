import { useStore } from "./store/bears";

export function BearCounter() {
  const { users } = useStore();

  return (
    <div>
      {users.map((user, key) => (
        <span>
          {" "}
          {user.name} {user.email} <span>teste</span>
        </span>
      ))}
    </div>
  );
}
