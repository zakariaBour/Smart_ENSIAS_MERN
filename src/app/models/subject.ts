import { Branch } from "./branch";

export interface Subject {
  id?: number,
  filiereIDS: number[];
  course: {
    name: string;
    description: string;
    code: string;
  };
  filiere?: Branch[]
}
