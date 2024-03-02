import cls from './style.module.scss';


const ErrorPage = () => {

  return (
    <div className={cls.container}>
      <h1>404</h1>
      <h3>Страница не найдена</h3>
    </div>
  );
};

export default ErrorPage;