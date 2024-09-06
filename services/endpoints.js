const BASE_URL = 'http://localhost:3000';

const API = {
  //Project
  getProjects: () => BASE_URL + '/project',
  addProject: () => BASE_URL + '/project',
  deleteProject: (id) => BASE_URL + '/project/' + `${id}`,

  // Task
  getTasks: () => BASE_URL + '/task',
  addTask: () => BASE_URL + '/task',
  deleteTask: (id) => BASE_URL + '/task/' + `${id}`,
};

export default API;
