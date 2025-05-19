export type Burger = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  calories?: number;
};

export type RootStackParamList = {
  Home: undefined;
  Details: { item: Burger };
};
