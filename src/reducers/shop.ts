import moment from "moment";
import { Moment } from "moment-jalaali";
import {
  IDbGroup,
  IDbMarketPlus,
  IDbOpenTime,
  IDbProduct
} from "../actions/shop";

export interface IShopState {
  // dbInfo?: IDbInfo;
  groups: IDbGroup[];
  markets: IDbMarketPlus[];
  openTimes: IDbOpenTime[];
  products: IDbProduct[];

  // products: IProductsState;
  cart: ICartState;
  deliver: IDeliverState;
  error: string;

  lastMarketId?: number;
  loadingDbInfo: boolean;
  loadDbInfo: boolean;
}

export interface IProductsState {
  [index: string]: IProductState;
}

export interface IProductState {
  id: number;
  title: string;
  price: number;
  max: number;
  img: string;
  enable: boolean;
}

export interface ICartState {
  [index: string]: number;
}

export interface ICartItem {
  id: number;
  title: string;
  amount: number;
  price: number;
}

export interface IDeliverState {
  deliverKind: string;
  deliverDistrict: string;

  mobile: string;
  fullname: string;
  address: string;

  location?: Position;
  date: Moment;
  time: string;

  loadingInfo: boolean;
  loadingLocation: boolean;
  // sendingCart:boolean;
}

export const INITIAL_SHOPSTATE: IShopState = {
  // dbInfo: undefined,
  // products: {},
  groups: [],
  markets: [],
  openTimes: [],
  products: [],

  cart: {},
  deliver: {
    deliverKind: "",
    deliverDistrict: "",
    fullname: "",
    address: "",
    mobile: "",
    date: moment(),
    time: "",
    loadingInfo: false,
    loadingLocation: false
    // , sendingCart:false
  },
  error: "",

  lastMarketId: undefined,
  loadingDbInfo: false,
  loadDbInfo: false
};
