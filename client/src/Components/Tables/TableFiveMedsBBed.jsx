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
import { AddButton } from "../Styles/Button.styled";

const TableFiveMedsBB = ({
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
            {/* ROW 1: Categories and Spanning Columns */}
            <TableRow>
              {/* Spance 2 rows vertically */}
              <TableCell rowSpan={2} align="center" style={{ fontWeight: 'bold' }}>
                Date
              </TableCell>
              <TableCell colSpan={4} align="center" style={{ fontWeight: 'bold' }}>
                Breakfast
              </TableCell>
              <TableCell colSpan={3} align="center" style={{ fontWeight: 'bold' }}>
                Lunch
              </TableCell>
              <TableCell colSpan={4} align="center" style={{ fontWeight: 'bold' }}>
                Dinner
              </TableCell>

              {/* FIXED: Changed rowSpan from 3 to 2 to match the header structure */}
              <TableCell rowSpan={2} align="center">
                <AddButton
                  readings={readings}
                  onClick={readings[readings.length - 1]?.chkMedsD ||
                    readings[readings.length - 1]?.chkMedsBed ?
                    add : () => { }}>
                  Add
                </AddButton>
              </TableCell>
            </TableRow>

            {/* ROW 2: Subheaders */}
            <TableRow>
              {/* Date and Button are omitted here because rowSpan covers this space */}
              {header
                .filter(x => x.prop !== "date")
                .map((x, i) => (
                  <TableCell align="center" style={{ fontWeight: 'bold' }} key={`thc-${i}`}>
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

export default TableFiveMedsBB;
