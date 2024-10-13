import { type FC } from "react";

import { ListItem } from "@/app/components/list/list-item";
import { DataType } from "@/types/data";

interface ListProps {
  list: DataType[];
}

export const List: FC<ListProps> = ({ list }) => {
  return (
    <div className="list-wrap">
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
};
