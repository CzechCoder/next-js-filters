import { MouseEvent, type FC } from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { ToggleButton } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { CategoryType } from "@/types/data";

interface FilterListToggleProps {
  options: CategoryType[];
  value: string | null;
  selectToggle(e: MouseEvent<HTMLElement>, value: string): void;
}

const useStyles = makeStyles({
  root: {
    width: "100%",
    justifyContent: "space-between",
  },
  toggle: {
    fontSize: ".8rem",
    border: "1px solid rgba(0, 0, 0, 0.5)",
    borderRadius: "10px",
    "&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)": {
      borderRadius: "10px",
    },
    "&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)": {
      borderRadius: "10px",
      border: "1px solid rgba(0, 0, 0, 0.5)",
    },
    "&.Mui-selected": {
      borderRadius: "10px",
      background: "#000",
      color: "#fff",
    },
    "&.MuiToggleButton-root": {
      "&:hover": {
        background: "#000",
        color: "#fff",
      },
    },
  },
});

export const FilterListToggle: FC<FilterListToggleProps> = ({
  options,
  value,
  selectToggle,
}) => {
  const classes = useStyles();
  return (
    <ToggleButtonGroup
      value={value}
      onChange={selectToggle}
      className={classes.root}
      exclusive
    >
      {options.map(({ label, id, value }) => (
        <ToggleButton className={classes.toggle} key={id} value={value}>
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
