import React, { useState } from 'react';
import { Modal } from 'antd';
import { useFormHooks } from '@/hooks/useFormHooks';
import InputWithLabel from '../core/InputWithLabel';

const AddNewProject = ({ openModal, setOpenModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(openModal);
  const { projectState, projectChangeHandler, projectSubmitHandler } =
    useFormHooks();

  const handleCancel = () => {
    setIsModalOpen(false);
    setOpenModal(false);
  };

  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      okButtonProps={{ hidden: true }}
      cancelButtonProps={{ hidden: true }}
    >
      <form
        onSubmit={(e) => projectSubmitHandler(e, setOpenModal)}
        className='flex flex-col gap-4'
      >
        <InputWithLabel
          label={'Project Name'}
          name={'project'}
          state={projectState}
          onChangeHandler={projectChangeHandler}
          isRequired={true}
        />
        <button className='self-center font-semibold px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 ease-in-out'>
          Submit
        </button>
      </form>
    </Modal>
  );
};
export default AddNewProject;
