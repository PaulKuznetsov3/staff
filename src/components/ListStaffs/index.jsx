import { useEffect, useState } from 'react';
import cls from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Staff from '../Staff';
import Sort from '../Sort';
import Filter from '../Filteres';
import AddHeader from '../AddHeader';
import { getStaffs } from '../../slices/staffSlice/staffSlice';
import { toast } from 'react-toastify';
import { handleFilterStaffs } from '../../utils/getFaff';


const List = () => {

  const dispatch = useDispatch();

  const [sortStaffs, setSortStaffs] = useState('default');
  const [filterStaffs, setFilterStaffs] = useState('default');
  const [isArchiveStaff, setIsArchiveStaff] = useState(false);
    
  const staffs = useSelector((state) =>  state.staffs.staffs);

  const handleCheckIsArchive = (value) => {
    setIsArchiveStaff(value);
  };
  const filterSelect = (value) => {
    setFilterStaffs(value);
  };

  const sortSelect = (value) => {
    setSortStaffs(value);
  };

 
  // сортировка
  const handleSortStaffs = (value) => {
    const sortedStaffs = [...staffs];
    switch (value) {
    case 'name':
      return sortedStaffs.sort((a, b) => a.name.localeCompare(b.name));
    case 'birthday':
      return sortedStaffs.sort((a, b) => new Date(b.birthday) - new Date(a.birthday));
    default:
      return staffs;
    }
  };
    

  useEffect(() => {
    // получение сотрудников
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/staffs');
        const data = await response.json();
        
        dispatch(getStaffs(data));
      } catch (error) {
        toast.error('Ошибка. Попробуйте еще раз.');
      }
    };
  
    fetchData();
  }, [ dispatch ]);

  const sortedStaffs = handleSortStaffs(sortStaffs);

  const filteredStaffs = handleFilterStaffs(filterStaffs, sortedStaffs);

  const resultStaffs = isArchiveStaff === false ? filteredStaffs : filteredStaffs.filter(staff => staff.isArchive === true);

  return (
    <div className={cls.container}>
      <div>
        <h4>Сотрудники:</h4>
        {resultStaffs?.map((staff) => (
          <Staff staff={staff} key={staff?.id} />
        ))}
      </div>
      <div>
        <Sort sortSelect={sortSelect}/>
        <Filter
          filterSelect={filterSelect}
          sortStaffs={sortedStaffs}
          checked={isArchiveStaff}
          handleCheckIsArchive={handleCheckIsArchive}
        />
        <AddHeader />
      </div>
    </div>
  );
};

export default List;