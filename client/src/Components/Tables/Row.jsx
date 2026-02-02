import React from "react";
import "./Rows.css";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Done";
import { Checkbox } from "@material-ui/core";

const Row = (
  x,
  i,
  readings,
  header,
  handleChange,
  startEditing,
  stopEditing,
  editIdx
) => {
  const currentlyEditing = editIdx === i;

  return (
    <TableRow key={`tr-${i}`}>
      {header.map((y, k) => (
        <TableCell align="center" key={`trc-${k}`}>
          {currentlyEditing ? (
            <TextField
              style={{ width: 45 }}
              name={y.prop}
              type={y.type}
              value={x[y.prop]}
              onChange={(e) => handleChange(e, y.prop, i)}
            />
          ) : currentlyEditing && y.type === "checkbox" ? (
            <Checkbox
              style={{ width: 45 }}
              name={y.prop}
              type={y.type}
              value={x[y.prop]}
              checked={Boolean(x[y.prop])}
              disabled={false}
              onChange={(e) => handleChange(e, y.prop, i)}
            />
          ) : !currentlyEditing && y.type === "checkbox" ? (
            <Checkbox
              style={{ width: 45 }}
              name={y.prop}
              type={y.type}
              value={x[y.prop]}
              checked={Boolean(x[y.prop])}
              disabled={true}
            />
          ) : (
            x[y.prop]
          )}
        </TableCell>
      ))}
      <TableCell align="center">
        {currentlyEditing ? (
          <SaveIcon onClick={() => stopEditing()} />
        ) : (
          <EditIcon onClick={() => startEditing(i)} />
        )}
      </TableCell>
    </TableRow>
  );
};

export default Row;
