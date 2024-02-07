import axios from "axios";
import {
  useContext,
  createContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import { DataReducer } from "../reducer/DataReducer";
import { initialState } from "../reducer/initialState";
import { ACTION_TYPE } from "../reducer/reducerActions/actions";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const getMeData = async () => {
    try {
      setIsLoading(true);
      const { status: categoryStatus, data: category } = await axios.get(
        "/api/categories"
      );
      if (categoryStatus === 200) {
        dispatch({
          type: ACTION_TYPE.INITIALIZE_CATEGORIES,
          payload: category.categories,
        });
      }
      const {
        status: productStatus,
        data: { products },
      } = await axios.get("/api/products");
      if (productStatus === 200) {
        dispatch({
          type: ACTION_TYPE.INITIALIZE_PRODUCTS,
          payload: products,
        });
      }
    } catch (error) {
      console.log("Error while fetchind data" + error.message);
    } finally {
      return setInterval(() => setIsLoading(false), 1000);
    }
  };
  useEffect(() => {
    let id = getMeData();
    return clearInterval(id);
  }, []);
  const [data, dispatch] = useReducer(DataReducer, initialState);
  return (
    <DataContext.Provider value={{ data, dispatch, isLoading }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
export const useData = () => useContext(DataContext);
