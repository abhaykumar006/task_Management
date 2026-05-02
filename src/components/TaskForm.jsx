import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoCalendarClearOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { closeForm } from "../redux/slices/tasksManagementSlice";
import { createTask, updateTask } from "../api/tasks";
import { closeModal } from "../redux/slices/modalSlice";
import { fetchTasks } from "../utils/fetchTasks";

export const TaskForm = () => {
  const { isAdding, isEditing, currentTask } = useSelector(
    (state) => state.taskManagement
  );
  const dispatch = useDispatch();
  const sortBy = useSelector((state) => state.allTasks.sortBy);

  const formatStatus = (status) => {
    if (status === "pending") return "To Do";
    if (status === "in-progress") return "In Progress";
    if (status === "completed") return "Completed";
    return status;
  };

  const formatPriority = (priority) => {
    if (!priority) return priority;
    return priority.charAt(0).toUpperCase() + priority.slice(1);
  };

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: currentTask?.title || "",
      description: currentTask?.description || "",
      dueDate: currentTask?.dueDate ? new Date(currentTask.dueDate) : null,
      status: currentTask?.status ? formatStatus(currentTask.status) : "",
      priority: currentTask?.priority ? formatPriority(currentTask.priority) : "",
    },
  });

  const handleAddOrUpdateTask = async (data) => {
    try {
      let result;
      if (currentTask) {
        result = await updateTask(data, currentTask.id);
        if (result?.success) {
          console.log("Updated Task", result.data);
        }
      } else {
        console.log("Creating Task", data);
        result = await createTask(data);
        if (result?.success) {
          console.log("Created Task", result.data);
        }
      }
      await fetchTasks(dispatch, sortBy);
    } catch (error) {
      console.log("Error in Creating or Updating Task", error);
    }
    dispatch(closeForm());
    dispatch(closeModal());
  };

  return (
    <>
      {(isAdding || isEditing) && (
        <form
          onSubmit={handleSubmit(handleAddOrUpdateTask)}
          className="bg-white p-5 sm:p-6 md:p-8 rounded-lg shadow-md flex flex-col gap-4 w-full max-w-lg mx-auto"
          aria-label={currentTask?.id ? "Edit task form" : "Create task form"}
        >
          <label className="sr-only" htmlFor="task-title">Task Title</label>
          <textarea
            id="task-title"
            {...register("title", { required: "Title is required" })}
            placeholder="Title"
            className="w-full block focus:outline-none focus:ring-0 resize-none overflow-hidden whitespace-pre-wrap break-words min-h-[40px] p-2 border border-gray-300 rounded-md"
            aria-invalid={errors.title ? "true" : "false"}
            aria-describedby={errors.title ? "title-error" : undefined}
          />
          {errors.title && (
            <p id="title-error" className="text-red-500 text-sm" role="alert">{errors.title.message}</p>
          )}

          <label className="sr-only" htmlFor="task-description">Task Description</label>
          <textarea
            id="task-description"
            {...register("description")}
            placeholder="Description"
            className="w-full placeholder:text-sm focus:outline-none focus:ring-0 resize-none overflow-hidden p-2 border border-gray-300 rounded-md"
            rows="2"
          />

          <fieldset className="flex flex-wrap gap-4 items-center mt-4 border-none p-0">
            <legend className="sr-only">Task details</legend>
            <div className="relative w-full sm:w-auto">
              <IoCalendarClearOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs" aria-hidden="true" />
              <label htmlFor="task-dueDate" className="sr-only">Due Date</label>
              <Controller
                name="dueDate"
                control={control}
                rules={{ required: "Due date is required" }}
                render={({ field }) => (
                  <DatePicker
                    id="task-dueDate"
                    placeholderText="Date"
                    onChange={(date) => field.onChange(date)}
                    selected={field.value ? new Date(field.value) : null}
                    minDate={new Date()}
                    dateFormat="dd MMM yy"
                    className="w-full sm:w-fit pl-10 py-2 text-sm pr-3 border border-gray-300 rounded-md focus:outline-none"
                    aria-invalid={errors.dueDate ? "true" : "false"}
                  />
                )}
              />
            </div>
            {errors.dueDate && (
              <p className="text-red-500 text-xs" role="alert">{errors.dueDate.message}</p>
            )}

            <div className="flex flex-col">
              <label htmlFor="task-status" className="sr-only">Status</label>
              <select
                id="task-status"
                {...register("status", { required: "Choose Status" })}
                className="w-full sm:w-auto p-2 text-sm border border-gray-300 rounded-md focus:outline-none"
              >
                <option value="">Status</option>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
              {errors.status && (
                <p className="text-red-500 text-xs" role="alert">{errors.status.message}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="task-priority" className="sr-only">Priority</label>
              <select
                id="task-priority"
                {...register("priority", { required: "Choose Priority" })}
                className="w-full sm:w-auto p-2 text-sm border border-gray-300 rounded-md focus:outline-none"
              >
                <option value="">Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
              {errors.priority && (
                <p className="text-red-500 text-xs" role="alert">{errors.priority.message}</p>
              )}
            </div>
          </fieldset>

          <div className="flex justify-between mt-4 w-full flex-wrap gap-2">
            <button
              type="button"
              onClick={() => {
                dispatch(closeForm());
                dispatch(closeModal());
              }}
              className="flex-1 sm:flex-none px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 sm:flex-none px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              {currentTask?.id ? "Update Task" : "Add Task"}
            </button>
          </div>
        </form>
      )}
    </>
  );
};
