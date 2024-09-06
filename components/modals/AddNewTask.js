import React, { useState } from 'react';
import { Modal } from 'antd';
import { useFormHooks } from '@/hooks/useFormHooks';
import InputWithLabel from '../core/InputWithLabel';

const AddNewTask = ({ openModal, setOpenModal }) => {
  const { taskState, taskChangeHandler, taskSubmitHandler } = useFormHooks();
  const [isModalOpen, setIsModalOpen] = useState(openModal);

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
        onSubmit={(e) => taskSubmitHandler(e, setOpenModal)}
        className='flex flex-col gap-2'
      >
        <InputWithLabel
          label={'Task Name'}
          name={'taskName'}
          state={taskState}
          onChangeHandler={taskChangeHandler}
          isRequired={true}
        />

        <InputWithLabel
          label={'Description'}
          name={'description'}
          isRequired={true}
          state={taskState}
          onChangeHandler={taskChangeHandler}
        />

        <button className='mt-2 self-center font-semibold px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 ease-in-out'>
          Submit
        </button>
      </form>
    </Modal>
  );
};
export default AddNewTask;
