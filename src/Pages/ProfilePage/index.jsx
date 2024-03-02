import { useSelector } from 'react-redux';
import cls from './style.module.scss';
import { useParams } from 'react-router-dom';
import FormProfile from '../../components/FormProfile';

const ProfilePage = () => {

  const { id } = useParams();

  const staff = useSelector((state) => state.staffs.staffs.find(staff => staff.id === id));

  return (
    <div className={cls.container}>
      <FormProfile staff={staff}/>
    </div>
  );
};

export default ProfilePage;