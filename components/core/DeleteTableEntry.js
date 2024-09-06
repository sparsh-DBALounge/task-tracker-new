'use client';

import { useTaskHooks } from '@/hooks/useTaskHooks';
import { useProjectHooks } from '@/hooks/useProjectHooks';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import ConfirmDelete from '../modals/ConfirmDelete';

const DeleteTableEntry = ({ object }) => {
  const { deleteProjectDB } = useProjectHooks();
  const { deleteTaskDB } = useTaskHooks();
  const [openModal, setOpenModal] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false)

  const handleDelete = () => {
      if (object.project) {
        deleteProjectDB(object.id);
        toast.success(`${object.project} Deleted`);
        return;
      } else if (object.taskName) {
        deleteTaskDB(object.id);
        toast.success(`${object.taskName} Deleted`);
        return;
      }
    }

    useEffect(() => {
      if(confirmDelete === true){
        handleDelete()
      }
      setConfirmDelete(false)
    }, [confirmDelete])
  

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className='bg-red-500 text-white px-3 py-1 mr-2 rounded hover:bg-red-700 transition-all'
      >
        Delete
      </button>

      {openModal && (
        <ConfirmDelete openModal={openModal} setOpenModal={setOpenModal} confirmDelete={confirmDelete} setConfirmDelete={setConfirmDelete}/>
      )}
    </>
  );
};

export default DeleteTableEntry;
