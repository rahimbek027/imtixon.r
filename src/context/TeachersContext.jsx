import { createContext, useState } from 'react';

export const TeachersContext = createContext();

export const TeachersProvider = ({ children }) => {
  const [teachers, setTeachers] = useState([]);

  return (
    <TeachersContext.Provider value={{ teachers, setTeachers }}>
      {children}
    </TeachersContext.Provider>
  );
};
