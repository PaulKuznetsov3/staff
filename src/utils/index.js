
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

// сортировка
export const handleSortStaffs = (value, staffs) => {
  const sortedStaffs = [...staffs];
  switch (value) {
  case 'name':
    return sortedStaffs.sort((a, b) => a.name.localeCompare(b.name));
  case 'birthday':
    return sortedStaffs.sort((a, b) => new Date(b.birthday) - new Date(a.birthday));
  default:
    return sortedStaffs;
  }
};
  