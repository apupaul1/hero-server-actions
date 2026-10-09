"use client";

import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  ListBox,
  Select,
  DateField,
  Form,
  FieldError,
} from "@heroui/react";

const TaskModal = ({
  createTask,
}: {
  createTask: (formData: FormData) => void;
}) => {
  return (
    <div className="my-5">
      <Modal>
        <Button variant="secondary">Create Task</Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <Envelope className="size-5" />
                </Modal.Icon>
                <Modal.Heading>Create A Task</Modal.Heading>
                <p className="mt-1.5 text-sm leading-5 text-muted">
                  Fill out the form below and we'll get back to you. The modal
                  adapts automatically when the keyboard appears on mobile.
                </p>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <Form action={createTask} className="flex flex-col gap-4">
                    <TextField
                      className="w-full"
                      name="title"
                      type="text"
                      variant="secondary"
                      isRequired
                    >
                      <Label>Title</Label>
                      <Input placeholder="Enter task title" />

                      <FieldError>Task title required</FieldError>
                    </TextField>
                    <TextField
                      className="w-full"
                      name="description"
                      type="text"
                      variant="secondary"
                    >
                      <Label>Description</Label>
                      <Input placeholder="Enter task description" />
                    </TextField>

                    <Select
                      className="w-full"
                      placeholder="Select status"
                      variant="secondary"
                      name="status"
                    >
                      <Label>Status</Label>
                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="todo" textValue="todo">
                            Todo
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item
                            id="in-progress"
                            textValue="in-progress"
                          >
                            In-Progress
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="completed" textValue="completed">
                            Completed
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>

                    <Select
                      className="w-full"
                      placeholder="Select task priority"
                      variant="secondary"
                      name="priority"
                    >
                      <Label>Priority</Label>
                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="low" textValue="low">
                            Low
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="medium" textValue="medium">
                            Medium
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="high" textValue="high">
                            High
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>

                    <DateField className="w-full" name="dueDate">
                      <Label>Date</Label>
                      <DateField.Group variant="secondary">
                        <DateField.Input>
                          {(segment) => <DateField.Segment segment={segment} />}
                        </DateField.Input>
                      </DateField.Group>
                    </DateField>

                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button
                        //   slot="close"
                        type="submit"
                      >
                        Send Message
                      </Button>
                    </Modal.Footer>
                  </Form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default TaskModal;
