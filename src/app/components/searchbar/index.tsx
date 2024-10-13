import { ChangeEvent, type FC } from "react";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  value: string;
  changeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ value, changeInput }) => {
  return (
    <div className="searchBar-wrap">
      <SearchIcon />
      <input
        type="text"
        placeholder="Lamborghini"
        value={value}
        onChange={changeInput}
      />
    </div>
  );
};
