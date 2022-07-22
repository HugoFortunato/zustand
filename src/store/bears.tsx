import create from "zustand";

export type Users = {
  name: string;
  email: string;
};

export type UserTypes = {
  users: Users[];
  addUser: (user: Users) => void;
  removeAllUsers?: () => void;
};

export const useStore = create<UserTypes>((set) => ({
  users: [],
  addUser: (user: Users) => set((state) => ({ users: [...state.users, user] })),
  removeAllUsers: () => set({ users: [] }),
}));
