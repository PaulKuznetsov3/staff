import Select from '../UI/Select';
import cls from './style.module.scss';

const Sort = ({ sortSelect }) => {

  const handleSortSelect = (value) => {
    sortSelect(value);
  };

  const options = [
    { value: 'default', label: 'По умолчанию' },
    { value: 'name', label: 'По имени' },
    { value: 'birthday', label: 'По дате рождения' },
  ];

  return (
    <div className={cls.container}>
      <h4>Сортировать</h4>
      <Select options={options} onChange={handleSortSelect} />
    </div>
  );
};

export default Sort;