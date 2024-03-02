import cls from './style.module.scss';
import { useNavigate } from 'react-router-dom';

const Staff = ({ staff }) => {
  const navigate = useNavigate();
  
  const handleProfileClick = () => {
    navigate(`/profile/${staff?.id}`);
  };
  
  return (
    <div className={cls.container} onClick={handleProfileClick}>
      <div className={cls.name}>
        <strong>Имя:</strong> {staff?.name}
      </div>
      <div className={cls.role}>
        <strong>Должность:</strong> 
        {staff?.role === 'cook' ? 'повар' : staff?.role === 'waiter' ? 'официант' : 'водитель'}
      </div>
      <div className={cls.phone}>
        <strong>Телефон:</strong> {staff?.phone}
      </div>
    </div>
  );
};

export default Staff;