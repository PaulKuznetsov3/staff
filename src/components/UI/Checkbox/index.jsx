import cls from './style.module.scss';

const Checkbox = ({ handleCheckIsArchive, isArchiveStaff }) => {
    
  return (
    <label className={cls.checkbox}>
      <input 
        type="checkbox" 
        onChange={(e) => handleCheckIsArchive(e.target.checked)}
        checked={isArchiveStaff}
      />
      <span className={cls.checkmark}></span>
        в архиве
    </label>
  );
};

export default Checkbox;