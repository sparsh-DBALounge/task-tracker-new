import {
  setProjects,
  addProject,
  deletProject,
} from '@/redux/slice/project.slice';
import { setTasks, addTask, deleteTask } from '@/redux/slice/task.slice';
import { useDispatch } from 'react-redux';

const useActionDispatcher = () => {
  const dispatch = useDispatch();

  return {
    // Project
    setProjects: (payload) => dispatch(setProjects(payload)),
    addProject: (payload) => dispatch(addProject(payload)),
    deletProject: (payload) => dispatch(deletProject(payload)),

    // Task
    setTasks: (payload) => dispatch(setTasks(payload)),
    addTask: (payload) => dispatch(addTask(payload)),
    deleteTask: (payload) => dispatch(deleteTask(payload)),
  };
};

export default useActionDispatcher;
