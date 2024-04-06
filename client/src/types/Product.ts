export interface Product {
  PID: string;
  Product_name: string;
  priceScale: {
    Capacity: string;
    Price: number;
    _id: string;
  }[];
  Pictures: string;
  Brand_Name: string;
  display_price: number;
}
export interface BestsellerProduct {
  PID: string;
  Product_name: string;
  Sold: number;
  Pictures: string;
  Brand_Name: string;
  display_price: number;
  Product_gender: string;
}

export interface ProductDetail {
  PID: string;
  Product_name: string;
  Product_brand: string;
  Product_gender: string;
  priceScale: {
    Capacity: string;
    Price: number;
    _id: string;
  }[];
  Features: {
    release: string;
    suitable_age: string;
    fragrant_saving: string;
  };
  Scent: {
    Main: string[];
    First: string[];
    Middle: string[];
    Final: string[];
  };
  seasonRate: {
    Spring: number;
    Summer: number;
    Autumn: number;
    Winter: number;
  };
  dayNightRate: {
    day: number;
    night: number;
  };
  Pictures: string;
  Description: string;
}
