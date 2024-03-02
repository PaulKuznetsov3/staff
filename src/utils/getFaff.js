
export const getData = async () => {
  try {
    const response = await fetch('http://localhost:5000/staffs');
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

// фильтрация
export const handleFilterStaffs = (value, sortedStaffs) => {
  switch (value) {
  case 'cook':
    return sortedStaffs.filter((staff) => staff.role === 'cook');
  case 'waiter':
    return sortedStaffs.filter((staff) => staff.role === 'waiter');
  case 'driver':
    return sortedStaffs.filter((staff) => staff.role === 'driver');
  default:
    return sortedStaffs;
  }
};