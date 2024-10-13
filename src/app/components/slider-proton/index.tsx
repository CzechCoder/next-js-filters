import { type FC } from "react";
import { makeStyles } from "@mui/styles";
import { Slider } from "@mui/material";

interface SliderProtonProps {
  value: number | number[];
  changePrice(e: Event, value: number | number[]): void;
}

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: "3rem",
  },
  thumb: {
    color: "#000",
  },
  rail: {
    color: `rgba(0, 0, 0, 0.26)`,
  },
  track: {
    color: "#000",
  },
  label: {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#000",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&::before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

export const SliderProton: FC<SliderProtonProps> = ({ value, changePrice }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        value={value}
        onChange={changePrice}
        valueLabelDisplay="on"
        min={1000}
        max={5000}
        classes={{
          thumb: classes.thumb,
          rail: classes.rail,
          track: classes.track,
          valueLabel: classes.label,
        }}
      />
    </div>
  );
};
