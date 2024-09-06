const InputWithLabel = (props) => {
  const {
    state = {},
    type = 'text',
    label = '',
    name = '',
    isRequired = false,
    isDisabled = false,
    onChangeHandler = () => {},
  } = props;

  return (
    <div className='flex flex-col gap-2'>
      <label>
        {label} {isRequired && <span className='text-red-500'>*</span>}
      </label>
      <input
        className='w-full border p-1 text-lg'
        type={type}
        name={name}
        required={isRequired}
        value={state[name]}
        onChange={(e) => onChangeHandler(e)}
      ></input>
    </div>
  );
};

export default InputWithLabel;
