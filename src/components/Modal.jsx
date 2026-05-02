import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/slices/modalSlice";
import { closeForm } from "../redux/slices/tasksManagementSlice";
import { TaskForm } from "./TaskForm";
import Portal from "./Portal";

export const Modal = () => {
  const { isOpen, contentKey } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const componentMap = {
    createTask: {
      component: <TaskForm />,
    },
  };

  const currentContent = componentMap[contentKey];

  if (!isOpen || !currentContent) return null;

  const clickOverlay = () => {
    dispatch(closeForm());
    dispatch(closeModal());
  };
  return (
    <Portal containerId="modal-root">
      <div
        className={`fixed inset-0 h-full w-full bg-black/65 flex justify-center items-center`}
        onClick={() => clickOverlay()}
      >
        <div className="" onClick={(e) => e.stopPropagation()}>
          {currentContent.component}
        </div>
      </div>
    </Portal>
  );
};
