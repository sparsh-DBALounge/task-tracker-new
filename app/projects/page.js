'use client';

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useProjectHooks } from '@/hooks/useProjectHooks';
import AddNewProject from '@/components/modals/AddNewProject';
import Table from '@/components/core/Table';

export default function Employees() {
  const { fetchProjects } = useProjectHooks();
  const { projects } = useSelector((state) => state.projectSlice);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <div className='max-w-5xl mx-auto flex flex-col mt-10 gap-10 items-center px-3'>
        <p className='font-semibold text-2xl'>Projects List</p>

        <button
          onClick={() => setOpenModal(true)}
          className='self-end p-2 bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 ease-in-out'
        >
          Add New Project
        </button>

        <Table
          headings={['S.No.', 'Project Name', 'Created At', 'Actions']}
          children={['project', 'created_at']}
          data={projects}
        />
      </div>

      {openModal && (
        <AddNewProject openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </>
  );
}
