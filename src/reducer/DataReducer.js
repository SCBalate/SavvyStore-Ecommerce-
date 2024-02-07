import React from "react";
import { v4 as uuid } from "uuid";
import { ACTION_TYPE } from "./reducerActions/actions";

export const DataReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.INITIALIZE_CATEGORIES: {
      const data = action.payload.reduce(
        (acc, { category }) => [...acc, category],
        []
      );
      return {
        ...state,
        categoryData: [...data],
      };
    }
    case ACTION_TYPE.INITIALIZE_PRODUCTS: {
      return {
        ...state,
        products: [...action.payload],
        productCopy: [...action.payload],
      };
    }
    case ACTION_TYPE.ADD_CATEGORY: {
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    }
    case ACTION_TYPE.REMOVE_CATEGORY: {
      const data = state.categories.filter((ele) => ele !== action.payload);
      return {
        ...state,
        categories: data,
      };
    }
    case ACTION_TYPE.ADD_ADDRESS: {
      return {
        ...state,
        address: [...state.address, action.payload],
      };
    }
    case ACTION_TYPE.ADD_ORDER: {
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    }
    case ACTION_TYPE.ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    case ACTION_TYPE.REMOVE_FROM_CART: {
      const data = state.filter((ele) => ele !== action.payload);
      return {
        ...state,
        cart: data,
      };
    }
    case ACTION_TYPE.ADD_TO_WISHLIST: {
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    }
    case ACTION_TYPE.REMOVE_FROM_WISHLIST: {
      const data = state.filter((ele) => ele !== action.payload);
      return {
        ...state,
        wishlist: data,
      };
    }
    case ACTION_TYPE.REMOVE_CART_WISHLIST: {
      return {
        ...state,
        cart: [],
        wishList: [],
        addresses: [
          {
            id: uuid(),
            fullName: "Saurabh Balate",
            mobileNumber: "8668938753",
            pinCode: "413705",
            country: "India",
            state: "Maharashtra",
            city: "Rahuri",
            address: "Sadguru Krupa , TanpureWadi Road, Rahuri",
            isDefault: false,
          },
        ],
      };
    }
    case ACTION_TYPE.EDIT_ADDRESS: {
      return {
        ...state,
        addresses: state.addresses.reduce((acc, curr) =>
          curr.id === action.payload._id
            ? [...acc, { ...action.payload }]
            : [...acc, { ...curr }]
        ),
      };
    }
    case ACTION_TYPE.REMOVE_ADDRESS: {
      const data = state.filter((ele) => ele !== action.payload);
      return {
        ...state,
        address: data,
      };
    }
    case ACTION_TYPE.CLEAR_FILTER: {
      return {
        ...state,
        priceRange: "90000",
        sortByRatings: "",
        sortByPrice: "Recommended",
        search: "",
        categories: [],
        products: state.productCopy,
      };
    }
    case ACTION_TYPE.LOAD_CART_WISHLIST: {
      return {
        ...state,
        cart: [...action?.payload?.cart],
        wishList: [...action?.payload?.wishlist],
      };
    }
    case ACTION_TYPE.PRICE_RANGE: {
      return {
        ...state,
        priceRange: action.payload,
      };
    }
    case ACTION_TYPE.SEARCH: {
      return {
        ...state,
        search: action.payload,
      };
    }
    case ACTION_TYPE.SORT_BY_RATING: {
      return {
        ...state,
        sortByRatings: action.payload,
      };
    }
    case ACTION_TYPE.SORT_BY_PRICE: {
      return {
        ...state,
        sortByPrice: action.payload,
      };
    }
    case ACTION_TYPE.SET_ORDER_ADDRESS: {
      return {
        ...state,
        orderAddress: { ...action.payload },
      };
    }

    default:
      throw new Error("Error in reducer: " + Error.message);
  }
};
