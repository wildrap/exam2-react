// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

import { Timestamp } from "@firebase/firestore";

export interface Customer {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  custCode: string;
  phone: string;
  email: string;
  createdDate: Timestamp;
  updatedDate: Timestamp;
}
