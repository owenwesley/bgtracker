import { makeStyles } from "@material-ui/core";

export const useTableStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: window.innerHeight - 90,
  },
  //   maxHeight: (A1C) =>
  //     A1C > 0 ? window.innerHeight - 130 : window.innerHeight - 90,
  // },
});
