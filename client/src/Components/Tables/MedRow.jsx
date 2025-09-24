import React from "react";
import "./Rows.css";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Done";

const MedRow = (
  x,
  i,
  medications,
  header,
  handleChange,
  handleDelete,
  startEditing,
  stopEditing,
  editIdx
) => {
  const currentlyEditing = editIdx === i;
  const currentlyDeleting = editIdx === i;

  return (
    <TableRow key={`tr-${i}`}>
      {header.map((y, k) => (
        <TableCell align="center" key={`trc-${k}`}>
          {currentlyEditing ? (
            <TextField
              style={{ width: 45 }}
              autoComplete="off"
              name={y.prop}
              type={y.type}
              defaultValue={x[y.prop]}
              onChange={(e) => handleChange(e, y.prop, i)}
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
      {currentlyDeleting ? (
        <TableCell align="center">
          <DeleteIcon onClick={() => handleDelete(i)} />
        </TableCell>
      ) : (
        <TableCell align="center">
          <DeleteIcon onClick={() => handleDelete(i)} />
        </TableCell>
      )}
    </TableRow>
  );
};

export default MedRow;
