function Select({
  label,
  value,
  onChange,
  options,
  ...props
}) {
  return (
    <label className='flex flex-col gap-0.5'>
      <select
        onChange={onChange}
        className='border-1 border-neutral-200 rounded-md py-1 px-0.5 focus:border-neutral-400 focus-visible:border-neutral-400 outline-0 transition-all duration-200'
        value={value}
        {...props}
      >
        {
          options.map(
            option =>
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
          )
        }
      </select>
    </label>
  )
}

export default Select
