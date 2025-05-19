export type Burger = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  calorie?: number;
};

export type CartItem = Burger & {
  quantity: number;
};

export type RootStackParamList = {
  Home: undefined;
  Details: { item: Burger };
  Cart: undefined;
};
