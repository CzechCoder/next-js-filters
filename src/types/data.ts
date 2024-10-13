export type OriginType = {
  id: number;
  checked: boolean;
  label: string;
};

export type CategoryType = {
  id: number;
  value: string;
  label: string;
};

export type RatingType = {
  id: number;
  value: string;
  label: string;
};

export type DataType = {
  id: number;
  title: string;
  fuel: string;
  horsepower: number;
  category: string;
  origin: string;
  rating: number;
  price: number;
  coverSrc: string;
};
