import { useEffect, useMemo, useState } from 'react';
import cls from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Staff from '../Staff';
import Sort from '../Sort';
import Filter from '../Filteres';
import AddHeader from '../AddHeader';
import { getStaffs } from '../../slices/staffSlice/staffSlice';
import { toast } from 'react-toastify';
import { handleFilterStaffs, handleSortStaffs } from '../../utils/getFaff';
import axios from 'axios';


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

     // получение сотрудников
     const getData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/staffs');
        dispatch(getStaffs(response.data));
      } catch (error) {
        console.log(error);
        toast.error('Ошибка. Попробуйте еще раз.');
      }
    };

  useEffect(() => {
    getData();
  }, [ dispatch ]);

  const sortedStaffs = useMemo(() => handleSortStaffs(sortStaffs, staffs), [sortStaffs, staffs]);

  const filteredStaffs = useMemo(() => handleFilterStaffs(filterStaffs, sortedStaffs), [filterStaffs, sortedStaffs]);

  const resultStaffs = useMemo(() => isArchiveStaff === false ? filteredStaffs : filteredStaffs.filter(staff => staff.isArchive === true), [filteredStaffs, isArchiveStaff]);

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