'use client';

import { useEffect, useState } from 'react';
import { useTaskHooks } from '@/hooks/useTaskHooks';
import { useSelector } from 'react-redux';
import Table from '@/components/core/Table';
import AddNewTask from '@/components/modals/AddNewTask';

export default function Tasks() {
  const { fetchTasks } = useTaskHooks();
  const { tasks } = useSelector((state) => state.taskSlice);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <div className='max-w-5xl mx-auto flex flex-col mt-10 gap-10 items-center px-3'>
        <p className='font-semibold text-2xl'>Tasks List</p>

        <button
          onClick={() => setOpenModal(true)}
          className='self-end p-2 bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 ease-in-out'
        >
          Add New Task
        </button>

        <Table
          headings={[
            'S.No.',
            'Task Name',
            'Description',
            'Created Date',
            'Actions',
          ]}
          children={['taskName', 'description', 'created_at']}
          data={tasks}
        />
      </div>

      {openModal && (
        <AddNewTask openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </>
  );
}
