import { createContext, useContext, useState } from "react";
import { viewsConstants } from "../constants/viewsConstants";
import { ViewProviderPropsTypes } from "../types/propsTypes";
import { ViewContextType } from "../types/contextTypes";

const INITIAL_STATE = {
  view: viewsConstants.Bullish,
  setView: () => {},
};

const ViewContext = createContext<ViewContextType>(INITIAL_STATE);

const ViewProvider = ({ children }: ViewProviderPropsTypes) => {
  const [view, setView] = useState(viewsConstants.Bullish);

  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
};

export default ViewProvider;

export const useViewContext = () => useContext(ViewContext);
