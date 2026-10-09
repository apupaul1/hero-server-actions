import { revalidatePath } from "next/cache";
import { createTask } from "./tasks";
import { ICreateTask } from "@/tasks.type";

export const CreateTask = async (formData: FormData) => {
  "use server";

  const newTask = Object.fromEntries(formData.entries());

  const res = await createTask(newTask as unknown as ICreateTask);

  console.log(res);

  if (res.ok) {
    revalidatePath("/tasks");
  }

  return res;
};
