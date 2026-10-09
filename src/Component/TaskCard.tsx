import { ITask } from "@/tasks.type";
import { Card, Link } from "@heroui/react";

const TaskCard = ({ task }: { task: ITask }) => {
  return (
    <div>
      <Card variant="secondary">
        <Card.Header>
          <Card.Title>{task.title}</Card.Title>
          <Card.Description>{task.description}</Card.Description>
        </Card.Header>
        <Card.Footer>
          <Link
            aria-label="Go to Acme Creator Hub (opens in new tab)"
            href="https://heroui.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Creator Hub
            <Link.Icon aria-hidden="true" />
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default TaskCard;
