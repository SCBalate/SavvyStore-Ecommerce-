import { v4 as uuid } from "uuid";
export const initialState = {
  priceRange: "13000",
  ratingRange: [
    "4 stars and above",
    "3 stars and above",
    "2 stars and above",
    "1 stars and above",
  ],
  sortByRatings: "",
  sortByPrice: "Recommended",
  search: "",
  categoryData: [],
  categories: [],
  products: [],
  cart: [],
  wishList: [],
  addresses: [
    {
      _id: uuid(),
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
  order: [],
  orderAddress: {
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
};
