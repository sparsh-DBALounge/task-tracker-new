import axios from 'axios';
import useActionDispatcher from './useActionDispatcher';
import API from '@/services/endpoints';

export const useProjectHooks = () => {
  const { setProjects, deletProject } = useActionDispatcher();

  const fetchProjects = async () => {
    try {
      const response = await axios.get(API.getProjects());
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProjectDB = async (projectId) => {
    try {
      await axios.delete(API.deleteProject(projectId));
      deletProject(projectId);
    } catch (error) {
      console.log(error);
    }
  };

  return { fetchProjects, deleteProjectDB };
};
