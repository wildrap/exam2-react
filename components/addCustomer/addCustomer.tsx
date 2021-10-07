import { Timestamp } from "@firebase/firestore";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { tp } from "../../configs/firebase";
import { Customer } from "../../interfaces/interface";
import { CrudService } from "../../service/crudservice";

export const AddCustomer = () => {
  const { register, handleSubmit, reset } = useForm<Customer>();
  const { saveCustomer } = CrudService();
  const onSubmit: SubmitHandler<Customer> = (data) => {
    const firstNameTemp: string = data.firstName;
    const lastNameTemp: string = data.lastName;
    const dobTemp = data.dateOfBirth;
    const newDobTemp = dobTemp.split("-").join("");

    const currentData = { ...data };
    currentData.createdDate = new Timestamp(0, 0);
    currentData.updatedDate = new Timestamp(0, 0);
    currentData.custCode = firstNameTemp + lastNameTemp + newDobTemp;

    saveCustomer(currentData);
    reset();
  };

  return (
    <Container>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="outlined-required"
                  label="FirstName"
                  fullWidth
                  placeholder="Juan"
                  type="text"
                  name="firstName"
                  {...register("firstName")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="outlined-required"
                  label="LastName"
                  fullWidth
                  placeholder="Dela Cruz"
                  type="text"
                  name="lastName"
                  {...register("lastName")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="outlined-required"
                  label="Date of Birth"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  type="date"
                  name="dateOfBirth"
                  {...register("dateOfBirth")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="outlined-required"
                  label="Phone"
                  fullWidth
                  type="phone"
                  name="phone"
                  {...register("phone")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  fullWidth
                  type="email"
                  name="email"
                  {...register("email")}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="success">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AddCustomer;
