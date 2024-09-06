import useActionDispatcher from './useActionDispatcher';
import axios from 'axios';
import API from '@/services/endpoints';

export const useTaskHooks = () => {
  const { setTasks, deleteTask } = useActionDispatcher();

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API.getTasks());
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTaskDB = async (taskId) => {
    try {
      await axios.delete(API.deleteTask(taskId));
      deleteTask(taskId);
    } catch (error) {
      console.log(error);
    }
  };

  return { fetchTasks, deleteTaskDB };
};
