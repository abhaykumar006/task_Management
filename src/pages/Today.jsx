import { getCurrentDate, getCurrentDay } from "../utils/common-utils";
import { useSelector } from "react-redux";
import { TaskList } from "../components/TaskList";

export const Today = () => {
  let tasks = useSelector((state) => state?.allTasks?.tasks);

  const currentDate = new Date();

  const isSameDate = (date1, date2) => {
    date1 = new Date(date1);
    return (
      date1?.getFullYear() === date2?.getFullYear() &&
      date1?.getMonth() === date2?.getMonth() &&
      date1?.getDate() === date2?.getDate()
    );
  };

  tasks = tasks.filter((task) => {
    return isSameDate(task.dueDate, currentDate);
  });

  return (
    <div className="flex flex-col h-screen pb-20">
      <div className="flex flex-row gap-4 mt-10 w-fit rounded font-bold text-white text-xl bg-green-900 p-2 px-4 mb-10  ">
        <div className="font-bold">{getCurrentDate()}</div>
        <div className="">|</div>
        <div className="font-bold">Today</div>
        <div className="">|</div>
        <div className="font-bold">{getCurrentDay()}</div>
      </div>
      <div className="my-4 flex-1 overflow-y-auto scrollbar-hide">
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};
