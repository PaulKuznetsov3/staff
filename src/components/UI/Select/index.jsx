import cls from './style.module.scss';
const Select = ({ options, value, onChange,  }) => {
  return (
    <select className={cls.select} value={value} onChange={(e) => onChange(e.target.value)}>
      {options?.map((option) => (
        <option className={cls.option} key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;