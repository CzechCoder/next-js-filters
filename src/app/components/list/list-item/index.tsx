import { type FC } from "react";
import Image from "next/image";

import { DataType } from "@/types/data";

interface ListItemProps {
  item: DataType;
}

export const ListItem: FC<ListItemProps> = ({
  item: { coverSrc, title, price, horsepower, fuel, rating },
}) => (
  <div className="listItem-wrap">
    <Image
      src={coverSrc}
      alt="item"
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
    />
    <header>
      <h4>
        <b>{title}</b>
      </h4>
      <span>🌟 {rating}</span>
    </header>
    <footer>
      <p>
        <span>Fuel: </span>
        <b>{fuel}</b>
        {" / "}
        <span>
          Horsepower: <b>{horsepower}HP</b>
        </span>
      </p>
      <p>
        Daily fee: <b>${price}</b>
      </p>
    </footer>
  </div>
);
