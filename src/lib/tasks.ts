import { ICreateTask } from "@/tasks.type";
import tasks from "../data/tasks.json";

export const getTasks = async () => {
  return tasks;
};

export const createTask = async (newTask: ICreateTask) => {
  newTask.id = String(tasks.length + 1);
  const fullTask = {
    ...newTask,
    createdAt: new Date().toISOString(),
    tags: [],
    assignedTo: { userId: "unassigned", name: "Unassigned" },
  };

  tasks.unshift(fullTask);

  return { ok: true, message: "Task Added Successfully" };
};
