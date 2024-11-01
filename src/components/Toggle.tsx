import { useMemo } from "react";
import { viewsConstants } from "../constants/viewsConstants";
import "../styles/Toggle.css";
import { useViewContext } from "../context/ViewProvider";

const Toggle = () => {
  const allViews = useMemo(() => Object.values(viewsConstants), []);
  const { view, setView } = useViewContext();
  return (
    <div className="toggle-container">
      {allViews.map((item) => (
        <div
          key={item}
          className={`toggle-item ${view === item ? "selected" : ""}`}
          onClick={() => setView(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Toggle;
