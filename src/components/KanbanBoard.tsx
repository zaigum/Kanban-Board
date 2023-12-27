
import PlusIcon from "../icons/PlusIcon";
import { useMemo, useState } from "react";
import { Column, Id, Task } from "../types";
import ColumnContainer from "./ColumnContainer";
import { useEffect } from "react";
import Navbar from "./Navbar-kanban"; // Add this import

import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import TaskCard from "./TaskCard";

const defaultCols: Column[] = [
    {
      id: "TL REVIEW",
     title: "TL REVIEW",
    },
    {
      id: "doing",
     title: "PRE BACKLOG 5",
    },
    {
     id: "done",
      title: "PRODUCT BACKLOG ITEMS 25",
   },
    {
     id: "IN PROGRESS",
      title: "IN PROGRESS",
   },
];

const defaultTasks: Task[] = [
  //   {
  //      id: "1",
  //   columnId: "TL REVIEW",
  //    content: "List admin APIs for dashboard",
  //  },
  //  {
  //    id: "2",
  //    columnId: "todo",
  //    content:
  //     "Develop user registration functionality with OTP delivered on SMS  ",
  //  },
  //  {
  //    id: "3",
  //    columnId: "doing",
  //    content: "Conduct security testing",
  //  },
  //  {
  //    id: "4",
  //    columnId: "doing",
  //    content: "Analyze competitors",
  //  },
    // {
    //   id: "5",
    //   columnId: "done",
    //   content: "Create UI kit documentation",
    // },
  // {
  //   id: "6",
  //   columnId: "done",
  //   content: "Dev meeting",
  // },
  // {
  //   id: "7",
  //   columnId: "done",
  //   content: "Deliver dashboard prototype",
  // },
  // {
  //   id: "8",
  //   columnId: "todo",
  //   content: "Optimize application performance",
  // },
  // {
  //   id: "9",
  //   columnId: "todo",
  //   content: "Implement data validation",
  // },
  // {
  //   id: "10",
  //   columnId: "todo",
  //   content: "Design database schema",
  // },
  // {
  //   id: "11",
  //   columnId: "todo",
  //   content: "Integrate SSL web certificates into workflow",
  // },
  // {
  //   id: "12",
  //   columnId: "doing",
  //   content: "Implement error logging and monitoring",
  // },
  //  {
  //     id: "13",
  //     columnId: "doing",
  //    content: "Design and implement responsive UI",
  //  },
  //   // New task added
  //  {
  //    id: "14",
  //   columnId: "done",
  //    content: "Write user documentation",
  //  },
];

function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>(defaultCols);
  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);

  const [tasks, setTasks] = useState<Task[]>(defaultTasks);

  const [activeColumn, setActiveColumn] = useState<Column | null>(null);

  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );



 

  useEffect(() => {
    const storedColumns = localStorage.getItem("kanbanColumns");
    const storedTasks = localStorage.getItem("kanbanTasks");

    console.log("Stored Columns:", storedColumns);
    console.log("Stored Tasks:", storedTasks);

    try {
      if (storedColumns) {
        setColumns(JSON.parse(storedColumns));
      } else {
         setColumns(defaultCols);
      }

      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      } else {
         setTasks(defaultTasks);
      }
    } catch (error) {
      console.error("Error loading data from localStorage:", error);
    }
  }, []);
  





  return (
    <div className="m-auto min-h-screen w-full  text-white bg-slate-700 items-center overflow-x-auto overflow-y-hidden px-[40px]">
    <Navbar /> {/* Include the Navbar component here */}
    <DndContext
      sensors={sensors}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      
    >
      <div className="m-auto flex gap-4 mt-24">
        <div className="flex gap-4">
          <SortableContext items={columnsId}>
            {columns.map((col) => (
              <ColumnContainer
                key={col.id}
                column={col}
                deleteColumn={deleteColumn}
                updateColumn={updateColumn}
                createTask={createTask}
                deleteTask={deleteTask}
                updateTask={updateTask}
                tasks={tasks.filter((task) => task.columnId === col.id)}
              />
            ))}
          </SortableContext>
        </div>
        <button
          onClick={() => {
            createNewColumn();
          }}
          className="
    h-[60px]
    w-[350px]
    min-w-[350px]
    cursor-pointer
    rounded-lg
    bg-mainBackgroundColor
    border-2
    border-columnBackgroundColor
    p-4
    ring-rose-500
    hover:ring-2
    flex
    gap-2
    "
        >
          <PlusIcon />
          Add Column
        </button>
      </div>

      {createPortal(
        <DragOverlay>
          {activeColumn && (
            <ColumnContainer
              column={activeColumn}
              deleteColumn={deleteColumn}
              updateColumn={updateColumn}
              createTask={createTask}
              deleteTask={deleteTask}
              updateTask={updateTask}
              tasks={tasks.filter(
                (task) => task.columnId === activeColumn.id
              )}
            />
          )}
          {activeTask && (
            <TaskCard
              task={activeTask}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          )}
        </DragOverlay>,
        document.body
      )}
    </DndContext>
  </div>
);




  function createTask(columnId: Id) {
    setTasks((prevTasks) => {
      const newTasks = [
        ...prevTasks,
        {
          id: generateId(),
          columnId,
          content: `Task ${prevTasks.length + 1}`, // Change from 0 to 1
        },
      ];
  
      localStorage.setItem("kanbanTasks", JSON.stringify(newTasks));
      return newTasks;
    });
  }
  
  function createNewColumn() {
    setColumns((prevColumns) => {
      const columnToAdd: Column = {
        id: generateId(),
        title: `Column ${prevColumns.length + 1}`, // Change from 0 to 1
      };
  
      const newColumns = [...prevColumns, columnToAdd];
      localStorage.setItem("kanbanColumns", JSON.stringify(newColumns));
      return newColumns;
    });
  }
  
  










  function deleteTask(id: Id) {
    setTasks((prevTasks) => {
      const newTasks = prevTasks.filter((task) => task.id !== id);
      localStorage.setItem("kanbanTasks", JSON.stringify(newTasks));
      return newTasks;
    });
  }


  function updateTask(id: Id, content: string) {
    setTasks((prevTasks) => {
      const newTasks = prevTasks.map((task) => {
        if (task.id !== id) return task;
        return { ...task, content };
      });
  
      localStorage.setItem("kanbanTasks", JSON.stringify(newTasks));
      return newTasks;
    });
  }
  



  function deleteColumn(id: Id) {
    setColumns((prevColumns) => {
      const filteredColumns = prevColumns.filter((col) => col.id !== id);
      setTasks((prevTasks) => {
        const newTasks = prevTasks.filter((task) => task.columnId !== id);
        localStorage.setItem("kanbanTasks", JSON.stringify(newTasks));
        return newTasks;
      });
      localStorage.setItem("kanbanColumns", JSON.stringify(filteredColumns));
      return filteredColumns;
    });
  }








  

  function updateColumn(id: Id, title: string) {
    setColumns((prevColumns) => {
      const newColumns = prevColumns.map((col) => {
        if (col.id !== id) return col;
        return { ...col, title };
      });
  
      localStorage.setItem("kanbanColumns", JSON.stringify(newColumns));
      return newColumns;
    });
  }
  






  function onDragStart(event: DragStartEvent) {
    if (event.active.data.current?.type === "Column") {
      setActiveColumn(event.active.data.current.column);
      return;
    }

    if (event.active.data.current?.type === "Task") {
      setActiveTask(event.active.data.current.task);
      return;
    }
  }







  function onDragEnd(event: DragEndEvent) {
    setActiveColumn(null);
    setActiveTask(null);
  
    const { active, over } = event;
    if (!over) return;
  
    const activeId = active.id;
    const overId = over.id;
  
    if (activeId === overId) return;
  
    const isActiveAColumn = active.data.current?.type === "Column";
    if (!isActiveAColumn) return;
  
    setColumns((columns) => {
      const activeColumnIndex = columns.findIndex((col) => col.id === activeId);
      const overColumnIndex = columns.findIndex((col) => col.id === overId);
  
      const newColumns = arrayMove(columns, activeColumnIndex, overColumnIndex);
      localStorage.setItem("kanbanColumns", JSON.stringify(newColumns));
      return newColumns;
    });
  }
  






  




  function onDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveATask = active.data.current?.type === "Task";
    const isOverATask = over.data.current?.type === "Task";

    if (!isActiveATask) return;

     if (isActiveATask && isOverATask) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const overIndex = tasks.findIndex((t) => t.id === overId);

        if (tasks[activeIndex].columnId != tasks[overIndex].columnId) {
           tasks[activeIndex].columnId = tasks[overIndex].columnId;
          return arrayMove(tasks, activeIndex, overIndex - 1);
        }

        return arrayMove(tasks, activeIndex, overIndex);
      });
    }
    
    
    const isOverAColumn = over.data.current?.type === "Column";

     if (isActiveATask && isOverAColumn) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);

        tasks[activeIndex].columnId = overId;
        console.log("DROPPING TASK OVER COLUMN", { activeIndex });
        return arrayMove(tasks, activeIndex, activeIndex);
      });
    }
  }
}

function generateId() {
   return Math.floor(Math.random() * 10001);
}

export default KanbanBoard;