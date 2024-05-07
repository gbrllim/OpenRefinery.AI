const InputSubjects = ({
  id,
  placeholder,
  handleChange,
  value,
  onClick,
  disabled,
}) => {
  return (
    <div className="flex flex-row">
      <input
        className=" h-12 w-full rounded-lg border-[1px] bg-transparent p-2 text-text hover:translate-y-[-2px] hover:border-[2px]"
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <button className="btn" onClick={onClick} disabled={disabled}>
        +
      </button>
    </div>
  );
};

export default InputSubjects;
