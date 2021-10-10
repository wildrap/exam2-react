const { collection } = require("firebase/firestore");
import {
  addDoc,
  getDoc,
  getDocs,
  onSnapshot,
  Timestamp,
} from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../configs/firebase";

export const CrudService = () => {
  const [allCustomers, setAllCustomer] = useState([]);
  const [rows, setRows] = useState([]);

  const getAllCustomer = async () => {
    const tempArray = [];
    const customers = await getDocs(collection(db, "customer"));
    customers.forEach((doc) => {
      tempArray.push(doc.data());
    });
    setAllCustomer(tempArray);
  };

  const processDataToSave = (data) => {
    const firstNameTemp: string = data.firstName;
    const lastNameTemp: string = data.lastName;
    const fullName = firstNameTemp.toLowerCase() + lastNameTemp.toLowerCase();
    const dobTemp = data.dateOfBirth;
    const newDobTemp = dobTemp.split("-").join("");

    const currentData = { ...data };
    currentData.createdDate = new Timestamp(0, 0);
    currentData.updatedDate = new Timestamp(0, 0);
    currentData.custCode = fullName + newDobTemp;

    saveCustomer(currentData);
  };

  const saveCustomer = async (data) => {
    await addDoc(collection(db, "customer"), data);
  };

  getAllCustomer();

  useEffect(() => {
    if (allCustomers) {
      setRows(allCustomers);
    }
  }, [allCustomers]);

  return { processDataToSave, rows };
};
