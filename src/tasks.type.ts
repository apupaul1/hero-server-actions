interface IAssignTo {
  userId: string;
  name: string;
}

export interface ITask {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  dueDate: string;
  assignedTo: IAssignTo;
  tags: string[];
  createdAt: string;
}

export interface ICreateTask {
  id: string
  title: string;
  description: string;
  status: string;
  priority: string;
  dueDate: string;
}
