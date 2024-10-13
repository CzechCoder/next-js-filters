import { type FC } from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { OriginType } from "@/types/data";

interface CheckBoxProtonProps {
  origin: OriginType;
  changeOrigin(id: number): void;
}

const useStyles = makeStyles({
  root: {
    "&$checked": {
      color: "#000",
    },
  },
  checked: {},
  wrap: {
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 0,
  },
  label: {
    fontSize: ".8rem",
  },
});

const CheckboxProton: FC<CheckBoxProtonProps> = ({ origin, changeOrigin }) => {
  const classes = useStyles();
  const { checked, label, id } = origin;
  return (
    <div>
      <FormControlLabel
        classes={{
          label: classes.label,
          root: classes.wrap,
        }}
        control={
          <Checkbox
            classes={{
              checked: classes.checked,
              root: classes.root,
            }}
            size="small"
            checked={checked}
            onChange={() => changeOrigin(id)}
            inputProps={{ "aria-label": "checkbox with small size" }}
          />
        }
        label={label}
      />
    </div>
  );
};

export default CheckboxProton;
