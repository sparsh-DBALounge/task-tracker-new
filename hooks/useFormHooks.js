import { useState } from 'react';
import { changeHandlerHelper } from './helper/changeHandlerHelper';
import axios from 'axios';
import API from '@/services/endpoints';
import useActionDispatcher from './useActionDispatcher';
import { toast } from 'react-toastify';

export const useFormHooks = () => {
  const { addProject, addTask } = useActionDispatcher();

  const projectInitialState = {
    project: '',
  };

  const taskInitialState = {
    taskName: '',
    description: '',
  };

  const projectSubmitHandler = async (e, setOpenModal) => {
    e.preventDefault();
    const body = { ...projectState };
    try {
      const response = await axios.post(API.addProject(), body);
      addProject(response.data);
      setOpenModal(false);
      toast.success('New Project Added');
    } catch (error) {
      console.log(error);
    }
  };

  const taskSubmitHandler = async (e, setOpenModal) => {
    e.preventDefault();
    const body = { ...taskState };
    try {
      const response = await axios.post(API.addTask(), body);
      addTask(response.data);
      setOpenModal(false);
      toast.success('New Task Added');
    } catch (error) {
      console.log(error);
    }
  };

  const [projectState, setProjectState] = useState({ ...projectInitialState });
  const [taskState, setTaskState] = useState({ ...taskInitialState });

  return {
    projectState,
    taskState,

    projectSubmitHandler,
    taskSubmitHandler,

    projectChangeHandler: (e) =>
      changeHandlerHelper(e, projectState, setProjectState),
    taskChangeHandler: (e) => changeHandlerHelper(e, taskState, setTaskState),
  };
};
