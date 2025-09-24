import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import MedRow from "./MedRow";
import { TableContainer } from "@material-ui/core";
import { useTableStyles } from "../Styles";

const TableMeds = ({
  add,
  A1C,
  medications,
  header,
  handleChange,
  handleDelete,
  startEditing,
  stopEditing,
  editIdx,
}) => {
  const classes = useTableStyles(A1C);
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {header.map((x, i) => (
                <TableCell align="center" key={`thc-${i}`}>
                  {x.name}
                </TableCell>
              ))}
              <TableCell align="center" colSpan="2">
                <Button
                  style={{ backgroundColor: "cyan", borderRadius: "50px" }}
                  variant="contained"
                  onClick={add}
                >
                  Add
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {medications.map((x, i) =>
              MedRow(
                x,
                i,
                medications,
                header,
                handleChange,
                handleDelete,
                startEditing,
                stopEditing,
                editIdx
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TableMeds;
