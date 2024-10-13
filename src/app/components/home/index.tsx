"use client";

import { type FC, MouseEvent, useEffect, useState } from "react";

import { FilterPanel } from "@/app/components/filterpanel";
import { SearchBar } from "@/app/components/searchbar";
import EmptyView from "@/app/components/empty-view";
import { List } from "@/app/components/list";
import { DataType, OriginType } from "@/types/data";
import { originList, dataList } from "@/data";

export const HomeComponent: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedRating, setSelectedRating] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<number[]>([1000, 5000]);
  const [origins, setOrigins] = useState<OriginType[]>(originList);
  const [list, setList] = useState<DataType[]>(dataList);
  const [inputSearch, setInputSearch] = useState<string>("");
  const [resultFound, setResultFound] = useState<boolean>(false);

  const handleSelectCategory = (e: MouseEvent<HTMLElement>, value: string) =>
    !value ? null : setSelectedCategory(value);

  const handleSelectRating = (e: MouseEvent<HTMLElement>, value: string) =>
    !value ? null : setSelectedRating(value);

  const handleChangeOrigin = (id: number) => {
    const originsStateList = origins;
    const changeCheckedOrigins = originsStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setOrigins(changeCheckedOrigins);
  };

  const handleChangePrice = (e: Event, value: number | number[]) =>
    setSelectedPrice(value as number[]);

  const applyFilters = () => {
    let updatedList = dataList;

    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => item.rating === parseInt(selectedRating)
      );
    }

    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }

    const originChecked = origins
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (originChecked.length) {
      updatedList = updatedList.filter((item) =>
        originChecked.includes(item.origin)
      );
    }

    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    if (inputSearch) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !==
          -1
      );
    }

    setList(updatedList);

    if (!updatedList.length) {
      setResultFound(false);
    } else {
      setResultFound(true);
    }
  };

  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedCategory, origins, selectedPrice, inputSearch]);

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedRating(null);
    setSelectedPrice([1000, 5000]);
    setOrigins(originList);
    setInputSearch("");
  };

  return (
    <>
      <SearchBar
        value={inputSearch}
        changeInput={(e) => setInputSearch(e.target.value)}
      />
      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          <FilterPanel
            selectToggle={handleSelectCategory}
            selectRating={handleSelectRating}
            changeOrigin={handleChangeOrigin}
            changePrice={handleChangePrice}
            selectedRating={selectedRating}
            selectedPrice={selectedPrice}
            selectedCategory={selectedCategory}
            origins={origins}
            clearFilters={clearFilters}
          />
        </div>
        <div className="home_list-wrap">
          {resultFound ? <List list={list} /> : <EmptyView />}
        </div>
      </div>
    </>
  );
};
