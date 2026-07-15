import instance from "../instance";

export const rootService = {
  getRoot: () => {
    return instance.get("/");
  },
};
