import { TaskList } from "../components/TaskList";
import { useSelector } from "react-redux";
import { TaskSorter } from "../components/TaskSorter";

export const Inbox = () => {
  const allTasks = useSelector((state) => state.allTasks.tasks);
  return (
    <div className="flex flex-col  mt-10 pb-20 h-screen  ">
      <h1 className="block w-fit rounded font-bold text-white text-3xl bg-green-900 p-2 px-16 ">
        Inbox
      </h1>
      <div className="mt-7 px-2 flex justify-end">
        <TaskSorter />
      </div>
      <div className="mt-8 flex-1 overflow-y-auto scrollbar-hide  ">
        <TaskList tasks={allTasks} />
      </div>
    </div>
  );
};
