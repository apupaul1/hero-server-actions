import TaskCard from "@/Component/TaskCard";
import TaskModal from "@/Component/TaskModal";
import { CreateTask } from "@/lib/actions";
import { getTasks } from "@/lib/tasks";
import { ITask } from "@/tasks.type";

const TasksPage = async () => {
  const tasks: ITask[] = await getTasks();

  return (
    <div className="my-6">
      <h1 className="text-2xl mb-6">Tasks ({tasks.length})</h1>

      <TaskModal createTask={CreateTask}></TaskModal>

      <div className="grid grid-cols-4 gap-6">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default TasksPage;
