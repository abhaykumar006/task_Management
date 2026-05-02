import { isPreviousDate } from "../utils/common-utils";
import { useSelector } from "react-redux";
import { TaskList } from "../components/TaskList";
import { currentDate } from "./../utils/common-utils";
import { sortTasks } from "../redux/slices/alltasksSlice";

export const Pending = () => {
  let tasks = useSelector((state) => state?.allTasks?.tasks);

  tasks = tasks.filter((task) => {
    return (
      isPreviousDate(task.dueDate, currentDate) && task.status !== "Completed"
    );
  });

  tasks = sortTasks(tasks, "progress-asc");

  return (
    <div className="flex flex-col h-screen pb-20">
      <div className="flex flex-row gap-4 mt-10 w-fit rounded font-bold text-white text-xl bg-green-900 p-2 px-4 mb-10  ">
        <div className="font-bold">Pending</div>
      </div>
      <div className="my-4">
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};
