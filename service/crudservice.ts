const { collection } = require("firebase/firestore");
import { addDoc, onSnapshot } from "@firebase/firestore";
import { db } from "../configs/firebase";

export const CrudService = () => {
  const getAllCustomer = () => {
    onSnapshot(collection(db, "customer"), (onSnapshot) => {
      return onSnapshot;
    });
  };

  const saveCustomer = async (data) => {
    await addDoc(collection(db, "customer"), data);
  };

  return { getAllCustomer, saveCustomer };
};
