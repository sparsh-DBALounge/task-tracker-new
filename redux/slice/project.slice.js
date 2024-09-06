import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [],
};

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    addProject: (state, action) => {
      state.projects = [...state.projects, action.payload];
    },
    deletProject: (state, action) => {
      state.projects = state.projects.filter(
        (project) => project.id !== action.payload
      );
    },
  },
});

export const { setProjects, addProject, deletProject } = projectSlice.actions;
export default projectSlice.reducer;
