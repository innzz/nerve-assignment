import { ReactNode } from "react";

export type ViewProviderPropsTypes = {
  children: ReactNode;
};

export type DateProviderPropsTypes = {
  children: ReactNode;
};

export type StrategyCardPropsTypes = {
  name: string;
  count: number;
};

export type ViewType = {
  View: "Bullish" | "Bearish" | "RangeBound" | "Volatile"; // Adjust as necessary for other possible values of "View"
  Value: {
    [date: string]: string[]; // Each date key has an array of strategy names
  };
}[];
