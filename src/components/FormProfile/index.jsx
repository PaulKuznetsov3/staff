import { useState } from 'react';
import cls from './style.module.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Form from '../Form';

const FormProfile = ({ staff }) => {
  
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // сохранение изменений
  const handleSave = async (e, data) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.put(`http://localhost:5000/staffs/${staff?.id}`, data);
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
      <h2>Профиль</h2>
      <Form staff={staff} handleSave={handleSave} isSubmitting={isSubmitting}/>
    </div>
  );
};

export default FormProfile;