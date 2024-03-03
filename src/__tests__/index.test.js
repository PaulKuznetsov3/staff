import { handleFilterStaffs, handleSortStaffs } from '../utils/index';
import jest from '@jest/globals';

const staffData = [
    {
      name: "Богдан Давыдов",
      phone: "+7 (971) 575-26-40",
      birthday: "29.11.1990",
      role: "driver",
      isArchive: false,
      id: "3"
    },
    {
      name: "Александр Ларионов",
      phone: "+7 (823) 440-3602",
      birthday: "26.01.1986",
      role: "cook",
      isArchive: true,
      id: "2"
    },
    {
      name: "Олимпиада Макарова",
      phone: "+7 (945) 447-2286",
      birthday: "06.01.1987",
      role: "waiter",
      isArchive: true,
      id: "4"
    }
  ];

jest.describe('handleFilterStaffs', () => {
  jest.it('should filter staffs by role "cook"', () => {
    const result = handleFilterStaffs('cook', staffData);
    jest.expect(result).toEqual([{
        name: "Александр Ларионов",
        phone: "+7 (823) 440-3602",
        birthday: "26.01.1986",
        role: "cook",
        isArchive: true,
        id: "2"
      },]);
  });

  jest.it('should filter staffs by role "waiter"', () => {
    const result = handleFilterStaffs('waiter', staffData);
    jest.expect(result).toEqual([{
        name: "Олимпиада Макарова",
        phone: "+7 (945) 447-2286",
        birthday: "06.01.1987",
        role: "waiter",
        isArchive: true,
        id: "4"
      }]);
  });

  jest.it('should filter staffs by role "driver"', () => {
    const result = handleFilterStaffs('driver', staffData);
    jest.expect(result).toEqual([{
        name: "Богдан Давыдов",
        phone: "+7 (971) 575-26-40",
        birthday: "29.11.1990",
        role: "driver",
        isArchive: false,
        id: "3"
      },]);
  });

  jest.it('should return all staffs for unknown role', () => {
    const result = handleFilterStaffs('manager', staffData);
    jest.expect(result).toEqual(staffData);
  });
});

jest.describe('handleSortStaffs', () => {
    jest.test('should sort staffs by name', () => {
      const sortedStaffs = handleSortStaffs('name', staffData);
      jest.expect(sortedStaffs).toEqual([
        {
          name: "Александр Ларионов",
          phone: "+7 (823) 440-3602",
          birthday: "26.01.1986",
          role: "cook",
          isArchive: true,
          id: "2"
        },
        {
          name: "Богдан Давыдов",
          phone: "+7 (971) 575-26-40",
          birthday: "29.11.1990",
          role: "driver",
          isArchive: false,
          id: "3"
        },
        {
          name: "Олимпиада Макарова",
          phone: "+7 (945) 447-2286",
          birthday: "06.01.1987",
          role: "waiter",
          isArchive: true,
          id: "4"
        }
      ]);
    });
  });

