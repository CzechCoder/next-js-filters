import { MouseEvent, type FC } from "react";
import { Button } from "@mui/material";

import { FilterListToggle } from "@/app/components/filter-list-toggle";
import CheckboxProton from "@/app/components/checkbox-proton";
import { SliderProton } from "@/app/components/slider-proton";
import { categoryList, ratingList } from "@/data";
import { OriginType } from "@/types/data";

interface FilterPanelProps {
  selectToggle(e: MouseEvent<HTMLElement>, value: string): void;
  selectRating(e: MouseEvent<HTMLElement>, value: string): void;
  changeOrigin(id: number): void;
  changePrice(e: Event, value: number | number[]): void;
  selectedRating: string | null;
  selectedPrice: number | number[];
  selectedCategory: string | null;
  origins: OriginType[];
  clearFilters(): void;
}

export const FilterPanel: FC<FilterPanelProps> = ({
  selectToggle,
  selectRating,
  changeOrigin,
  changePrice,
  selectedPrice,
  selectedRating,
  selectedCategory,
  origins,
  clearFilters,
}) => {
  return (
    <div>
      <div className="input-group">
        <p className="label">Category</p>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectToggle}
        />
      </div>
      <div className="input-group">
        <p className="label">Origin</p>
        {origins.map((origin) => (
          <CheckboxProton
            key={origin.id}
            origin={origin}
            changeOrigin={changeOrigin}
          />
        ))}
      </div>
      <div className="input-group">
        <p className="label">Daily fee</p>
        <SliderProton value={selectedPrice} changePrice={changePrice} />
      </div>
      <div className="input-group">
        <p className="label">Star Rating</p>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>
      <Button
        variant="contained"
        color="error"
        fullWidth
        onClick={clearFilters}
      >
        Clear the filters
      </Button>
    </div>
  );
};
