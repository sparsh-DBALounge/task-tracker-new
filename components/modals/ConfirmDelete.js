import React, { useState } from 'react';
import { Modal } from 'antd';

const ConfirmDelete = ({ openModal, setOpenModal, setConfirmDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(openModal);

  const handleCancel = () => {
    setIsModalOpen(false);
    setOpenModal(false);
  };

  const handleDelete = () => {
    setConfirmDelete(true);
  };

  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      okText='Confirm Delete'
      cancelText='Cancel'
      okButtonProps={{
        onClick: handleDelete,
        style: {
          backgroundColor: '#fff',
          border: '1px solid red',
          color: '#000',
        },
      }}
      cancelButtonProps={{
        style: {
          backgroundColor: '#fff',
          border: '1px solid blue',
          color: '#000',
        },
      }}
    >
      <div className='flex flex-col text-lg'>
        <h2>Delete Confirmation</h2>
        <p>Are u sure u want to delete ?</p>
      </div>
    </Modal>
  );
};
export default ConfirmDelete;
