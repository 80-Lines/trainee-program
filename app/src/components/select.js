function Select({ value, onChange, options }) {
  return (
    <select onChange={(event) => onChange?.(event.target.value)}>
      {options.map((option) => (
        <option
          key={option.value}
          selected={option.value === value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
