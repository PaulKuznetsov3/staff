import { useState } from 'react';
import Checkbox from '../UI/Checkbox';
import Select from '../UI/Select';
import cls from './style.module.scss';
import InputMask from 'react-input-mask';


const Form = ({ staff, handleSave, isSubmitting }) => {

  const optionsSelect = [
    { value: 'cook', label: 'повар' },
    { value: 'waiter', label: 'официант' },
    { value: 'driver', label: 'водитель' },
  ];
  
  const [name, setName] = useState(staff?.name || '');
  const [phone, setPhone] = useState(staff?.phone || '');
  const [birthday, setBirthday] = useState(staff?.birthday || '');
  const [role, setRole] = useState(staff?.role || '');
  const [isArchive, setIsArchive] = useState(staff?.isArchive || false);

  const data = {
    name,
    phone,
    birthday,
    role,
    isArchive
  };

  const handleCheckIsArchive = (value) => {
    setIsArchive(value);
  };

  const handleRole = (value) => {
    setRole(value);
  };

    
  return (
    <form className={cls.form}>
      <label>
          Имя
        <input
          type="text"
          defaultValue={staff?.name || ''}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
          Телефон
        <InputMask
          mask="+7 (999) 999-99-99"
          type="text"
          defaultValue={staff?.phone || ''}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label>
          Дата рождения
        <InputMask
          mask="99.99.9999"
          type="text"
          defaultValue={staff?.birthday || ''}
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
      </label>
      <label>
          Должность
        <Select
          options={optionsSelect}
          value={role}
          onChange={handleRole}
        />
      </label>
      <div className={cls.checkbox}>
        <Checkbox
          defaultValue={staff?.isArchive || ''}
          value={isArchive}
          isArchiveStaff={isArchive}
          handleCheckIsArchive={handleCheckIsArchive}
        />
      </div>
      <button disabled={isSubmitting} onClick={(e) => handleSave(e, data)}>
        {staff ? 'Сохранить' : 'Добавить'}
      </button>
    </form>
  );
};

export default Form;