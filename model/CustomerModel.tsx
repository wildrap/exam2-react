import { Timestamp } from "firebase/firestore";

export class CustomerModel {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  custCode: string;
  phone: string;
  email: string;
  createdDate: Timestamp;
  updatedDate: Timestamp;
}
