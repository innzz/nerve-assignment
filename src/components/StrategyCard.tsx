import "../styles/StrategyCard.css";
import { GoDotFill } from "react-icons/go";
import { StrategyCardPropsTypes } from "../types/propsTypes";

const StrategyCard = ({ name, count }: StrategyCardPropsTypes) => {
  return (
    <div className="card">
      <p>{name}</p>
      <p>
        <GoDotFill />
        {count} {count > 1 ? "Strategies" : "Strategy"}
      </p>
    </div>
  );
};

export default StrategyCard;
