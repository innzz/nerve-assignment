import { useMemo } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";
import StrategyCard from "./components/StrategyCard";
import Toggle from "./components/Toggle";
import { useDateContext } from "./context/DateProvider";
import { useViewContext } from "./context/ViewProvider";
import { strategyArray } from "./constants/strategyConstants";
import { filterViews } from "./helpers/viewHelper";

function App() {
  const { view } = useViewContext();
  const { date } = useDateContext();

  const filteredViews = useMemo(
    () =>
      filterViews({
        allViews: strategyArray,
        selectedDate: date,
        selectedView: view,
      }),
    [view, date]
  );

  return (
    <div className="container">
      <Toggle />
      <Dropdown />
      <div className="cards">
        {filteredViews && filteredViews.length > 0 ? (
          filteredViews.map((currView) => (
            <StrategyCard
              key={currView.name}
              name={currView.name}
              count={currView.count}
            />
          ))
        ) : (
          <div className="empty-strategies">
            <p>There are no strategies for</p>
            <p>{date.replace(/-/g, " ")}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
