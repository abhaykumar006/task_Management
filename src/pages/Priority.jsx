import { TaskList } from "../components/TaskList";
import { useSelector } from "react-redux";

/* Helper function to group an array of task objects by their 'priority' */
function groupByPriority(list) {
  return list.reduce((acc, item) => {
    if (!acc[item.priority]) {
      acc[item.priority] = [];
    }
    acc[item.priority].push(item);

    return acc;
  }, {});
}

export const Priority = () => {
  const allTasks = useSelector((state) => state.allTasks.tasks);
  const groupedTasks = groupByPriority(allTasks);
  const priorityOrder = ["High", "Medium", "Low"];

  return (
    <div className="flex flex-col mt-10 gap-8 h-screen pb-20">
      <h1 className=" block w-fit rounded font-bold text-white text-3xl bg-green-900 p-2 px-16">
        Priority
      </h1>

      <div className="mt-8 flex-1 flex overflow-y-auto scrollbar-hide flex-row justify-between gap-8">
        {groupedTasks &&
          Object.keys(groupedTasks)
            .sort((a, b) => priorityOrder.indexOf(a) - priorityOrder.indexOf(b))
            .map((priority, index) => {
              return (
                <div key={index} className="max-w-[400px] w-full">
                  <h1 className="block w-fit rounded font-bold text-white text-lg bg-green-900 p-2 px-3 mb-5">
                    {priority}
                  </h1>
                  <TaskList tasks={groupedTasks[priority]} />
                </div>
              );
            })}
      </div>
    </div>
  );
};
