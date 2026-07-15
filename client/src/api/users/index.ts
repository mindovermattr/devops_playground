import instance from "../instance";

export const userService = {
  getUsers: () => {
    return instance.get("/users");
  },
};
