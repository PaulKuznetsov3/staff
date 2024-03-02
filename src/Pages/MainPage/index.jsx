import cls from './style.module.scss';
import Header from '../../components/Header/index';
import List from '../../components/ListStaffs';

const MainPage = () => {

  return (
    <div className={cls.container}>
      <Header />
      <List />
    </div>
  );
};

export default MainPage;
