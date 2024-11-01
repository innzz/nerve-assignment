import { ViewType } from "../types/propsTypes";

export const filterViews = ({
  allViews,
  selectedView,
  selectedDate,
}: {
  allViews: ViewType;
  selectedView: string;
  selectedDate: string;
}) => {
  if (allViews.length > 0) {
    const filteredViews = allViews.reduce<{ [key: string]: number }>(
      (acc, curr) => {
        if (selectedView === curr.View) {
          for (const currDate of Object.keys(curr.Value)) {
            if (selectedDate === currDate) {
              for (const currValue of Object.values(curr.Value[currDate]!)) {
                if (!acc[currValue]) {
                  acc[currValue] = 0;
                }

                acc[currValue] += 1;
              }
            }
          }
        }
        return acc;
      },
      {}
    );
    return Object.keys(filteredViews).reduce<{ name: string; count: number }[]>(
      (acc, curr) => {
        acc.push({ name: curr, count: filteredViews[curr] });
        return acc;
      },
      []
    );
  }
};
