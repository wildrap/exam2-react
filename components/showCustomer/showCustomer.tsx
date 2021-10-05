import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { rows } from "../../const/const";
import { StyledTableCell, StyledTableRow } from "../../const/themes";

export const ShowCustomer = () => {
  return (
    <Container>
      <Card>
        <CardContent>
          <TableContainer>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>ID</StyledTableCell>
                  <StyledTableCell>FullName</StyledTableCell>
                  <StyledTableCell>Date Of Birth</StyledTableCell>
                  <StyledTableCell>Customer Code</StyledTableCell>
                  <StyledTableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {index}
                    </StyledTableCell>
                    <StyledTableCell>
                      {row.lastName}
                      {", "}
                      {row.firstName}
                    </StyledTableCell>
                    <StyledTableCell>{row.dateOfBirth}</StyledTableCell>
                    <StyledTableCell>{row.custCode}</StyledTableCell>
                    <StyledTableCell align="center">
                      <Box display="flex">
                        <Box component="span" sx={{ m: 1 }}>
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                          >
                            Edit
                          </Button>
                        </Box>
                        <Box component="span" sx={{ m: 1 }}>
                          <Button
                            variant="contained"
                            color="warning"
                            size="small"
                          >
                            Delete
                          </Button>
                        </Box>
                      </Box>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ShowCustomer;
