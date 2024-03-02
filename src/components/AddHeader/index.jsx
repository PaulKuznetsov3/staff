import { useNavigate } from 'react-router-dom';
import cls from './style.module.scss';

const AddHeader = () => {

  const navigate = useNavigate();

  const handleAdd = () => {
    navigate('/addprofile');
  };
  
  return (
    <div className={cls.header}>
      <h3>
        Добавить сотрудника
      </h3>
      <button className={cls.button} onClick={handleAdd}>Добавить</button>
    </div>

  );
};

export default AddHeader;