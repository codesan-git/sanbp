import { TodosValidationSchema, todosSchema } from "@/lib/safe-type";
import { useQuery } from "@tanstack/react-query"
import axios from "axios";

export const useGetTodosData = () => {
  return useQuery({
    queryKey: ['getTodos'],
    queryFn: async (): Promise<TodosValidationSchema[]> => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
      return res.data
    },
  });
}