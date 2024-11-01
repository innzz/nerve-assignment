import { createContext, useContext, useState } from "react";
import { DateProviderPropsTypes } from "../types/propsTypes";
import { DateContextType } from "../types/contextTypes";
import { dateArray } from "../constants/datesConstants";

const INITIAL_STATE = {
  date: dateArray[0],
  setDate: () => {},
};

const DateContext = createContext<DateContextType>(INITIAL_STATE);

const DateProvider = ({ children }: DateProviderPropsTypes) => {
  const [date, setDate] = useState(dateArray[0]);

  return (
    <DateContext.Provider value={{ date, setDate }}>
      {children}
    </DateContext.Provider>
  );
};

export default DateProvider;

export const useDateContext = () => useContext(DateContext);
