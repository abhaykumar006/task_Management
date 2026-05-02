import { useDispatch } from "react-redux";
import { startAdding } from "../redux/slices/tasksManagementSlice";
import { openModal } from "../redux/slices/modalSlice";
import PropTypes from "prop-types";

export const NewTask = ({ className }) => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onClick={() => {
        console.log("Clicking New Task Button");
        dispatch(startAdding());
        dispatch(openModal("createTask"));
      }}
      className={` rounded-lg  ${className} `}
    >
      + New Task
    </button>
  );
};

NewTask.propTypes = {
  className: PropTypes.string,
};
