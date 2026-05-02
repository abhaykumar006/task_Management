import { useDispatch, useSelector } from "react-redux";
import { setSortBy } from "../redux/slices/alltasksSlice";

export const TaskSorter = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector((state) => state.allTasks.sortBy) || "";

  /* Updating redux as per User's sort pattern selection */
  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value));
  };

  return (
    <div className="flex items-center gap-2 text-sm flex-wrap">
      <select
        id="sort"
        value={sortBy || ""}
        onChange={handleSortChange}
        className="border px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 w-full sm:w-auto min-w-[150px]"
      >
        <option value="">Sort</option>
        <option value="dueDateAsc">Due Date (Ascending)</option>
        <option value="createdAtDesc">Creation Date (Newest First)</option>

        <option value="priority">Priority (High {">"} Low)</option>
        <option value="progress-asc">
          Progress (To Do {">"} In Progress {">"} Completed)
        </option>
        <option value="progress-desc">
          Progress (Completed {">"} In Progress {">"} To Do )
        </option>
      </select>
    </div>
  );
};
