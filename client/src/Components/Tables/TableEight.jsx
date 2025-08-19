import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Row from "./Row";
import { TableContainer } from "@material-ui/core";
import { useTableStyles } from "../Styles";

const TableEight = ({
  add,
  A1C,
  readings,
  header,
  handleChange,
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
              <TableCell colSpan="5" align="center">
                Breakfast
              </TableCell>
              <TableCell colSpan="3" align="center">
                Lunch
              </TableCell>
              <TableCell colSpan="3" align="center">
                Dinner
              </TableCell>
              <TableCell colSpan="3" align="center">
                Before Bed
              </TableCell>
              <TableCell colSpan="4" align="center">
                Bed
              </TableCell>
              <TableCell rowSpan="3" align="center">
                <Button
                  style={{ backgroundColor: "cyan", borderRadius: "50px" }}
                  variant="contained"
                  onClick={add}
                >
                  Add
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell colSpan="2" align="center">
                Insulin
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell colSpan="2" align="center">
                Insulin
              </TableCell>
            </TableRow>
            <TableRow>
              {header.map((x, i) => (
                <TableCell align="center" key={`thc-${i}`}>
                  {x.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {readings.map((x, i) =>
              Row(
                x,
                i,
                readings,
                header,
                handleChange,
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

export default TableEight;
