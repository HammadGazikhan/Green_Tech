import { useMutation } from "react-query";
import serverAPI from "../config/serverAPI";
import errorHandle from "../utils/errorHandle";

export function useDelete({ url, name, refetch }) {
  const deleteItem = (id) => {
    return serverAPI.delete(`${url}${id}/`);
  };
  return useMutation(deleteItem, {
    onSuccess: () => {
      refetch && refetch();
    },
    onError: (error) => {
      errorHandle(error);
    },
  });
}
