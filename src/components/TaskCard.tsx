import { useState } from "react";
import TrashIcon from "../icons/TrashIcon";
import { Id, Task } from "../types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { BsThreeDots } from "react-icons/bs";

interface Props {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
}

function TaskCard({ task, deleteTask, updateTask }: Props) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="opacity-30 bg-gray-400 p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl border-2 border-red-500 cursor-grab relative"
      />
    );
  }

  if (editMode) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="bg-#030712 p-2.5 h-[100px] min-h-[100px] items-center flex text-white rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab relative"
      >
        <textarea
          className="h-[90%] w-full resize-none border-none rounded bg-transparent text-white focus:outline-none"
          value={task.content}
          autoFocus
          placeholder="Task content here"
          onBlur={toggleEditMode}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.shiftKey) {
              toggleEditMode();
            }
          }}
          onChange={(e) => updateTask(task.id, e.target.value)}
        />
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={toggleEditMode}
      className="bg-gray-800 p-2.5 h-[100px] min-h-[100px] items-center flex text-white rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-600 cursor-grab relative"
      onMouseEnter={() => setMouseIsOver(true)}
      onMouseLeave={() => setMouseIsOver(false)}
    >
      {/* Three dots icon */}
      <BsThreeDots
        className="text-white cursor-pointer absolute right-4 top-1/2 -translate-y-1/2"
        onClick={toggleDropdown}
      />

      {showDropdown && (
        <div
          className="dropdown absolute right-4 top-full bg-gray-800 p-2 rounded shadow-md border border-gray-600"
          style={{ width: "165px", maxHeight: "300px", overflowY: "auto" }}
        >
          <button
            onClick={() => {
              setShowDropdown(false);
            }}
            className="dropdown-item hover:bg-gray-700 text-white py-2 px-4 w-full rounded transition duration-300"
          >
            Move On
          </button>
          <div className="dropdown-divider border-t border-gray-600 my-2"></div>

          <button
            onClick={() => {
              setShowDropdown(false);
            }}
            className="dropdown-item hover:bg-gray-700 text-white py-2 px-4 w-full rounded transition duration-300 "
          >
            Copy Issue Link
          </button>

          <button
            onClick={() => {
              setShowDropdown(false);
            }}
            className="dropdown-item hover:bg-gray-700 text-white py-2 px-4 w-full rounded transition duration-300 "
          >
            Copy Issue Key
          </button>
          <div className="dropdown-divider border-t border-gray-600 my-2"></div>

          <button
            onClick={() => {
              setShowDropdown(false);
            }}
            className="dropdown-item hover:bg-gray-700 text-white py-1  px-4 w-full rounded transition duration-300 "
          >
            Add Flag
          </button>

          <button
            onClick={() => {
              setShowDropdown(false);
            }}
            className="dropdown-item hover:bg-gray-700 text-white py-1 px-4 w-full rounded transition duration-300 "
          >
            Add Label
          </button>

          <button
            onClick={() => {
              // Add the functionality for "Add Parent"
              setShowDropdown(false);
            }}
            className="dropdown-item hover:bg-gray-700 text-white py-1 px-4 w-full rounded transition duration-300 "
          >
            Add Parent
          </button>
          <div className="dropdown-divider border-t border-gray-600 my-2"></div>
        </div>
      )}

       <p className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap">
        {task.content}
      </p>

       {mouseIsOver && (
        <button
          onClick={() => {
            deleteTask(task.id);
          }}
          className="stroke-white absolute right-10 top-1/2 -translate-y-1/2 bg-gray-700 p-2 rounded opacity-60 hover:opacity-100"
        >
          <TrashIcon />
        </button>
      )}
    </div>
  );
}

export default TaskCard;
