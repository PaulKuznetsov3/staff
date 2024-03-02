import { useState } from 'react';
import cls from './style.module.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Form from '../Form';

const AddProfileForm = () => {

  const navigate = useNavigate(); 
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // сохранение сотрудника
  const handleSave = async (e, data) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post(`http://localhost:5000/staffs/`, data);
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('Ошибка. Попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };  
    
  return (
    <div className={cls.container}>
      <h2>Профиль нового сотрудника</h2>
      <Form handleSave={handleSave} isSubmitting={isSubmitting}/>
    </div>
  );
};

export default AddProfileForm;