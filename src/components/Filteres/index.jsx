import Checkbox from '../UI/Checkbox';
import Select from '../UI/Select';
import cls from './style.module.scss';

const Filter = ({ filterSelect, handleCheckIsArchive }) => {

  const options = [
    { value: 'cook', label: 'повар' },
    { value: 'waiter', label: 'официант' },
    { value: 'driver', label: 'водитель' },
    { value: 'default', label: 'По умолчанию' },
  ];

  return (
    <div className={cls.container}>
      <h4>Фильтровать</h4>
      <div>
        <h6>По должности</h6>
        <Select options={options} onChange={filterSelect}/>
      </div>
      <div>
        <h6>По статусу</h6>
        <Checkbox handleCheckIsArchive={handleCheckIsArchive}/>
      </div>
    </div>
    
  );
};

export default Filter;