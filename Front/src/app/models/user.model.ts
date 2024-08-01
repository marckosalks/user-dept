export interface User{
  id: number;
  name: string;
  email: string;
  department: Department
}

type Department ={
  id: number;
  name: string;
}
