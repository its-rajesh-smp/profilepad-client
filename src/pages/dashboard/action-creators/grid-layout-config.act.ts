import { AppDispatch } from "@/common/hooks/useAppDispatch";
import { setGridLayoutConfig } from "../reducers/grid-layout-config.reducer";
import { updateGridLayoutConfig } from "../services/dashboard.service";

export const updateGridLayoutConfigAct = ({
  all,
}: {
  all: ReactGridLayout.Layouts;
}) => {
  return async (dispatch: AppDispatch) => {
    await updateGridLayoutConfig({
      updatedGridLayoutConfig: all,
    });
    dispatch(setGridLayoutConfig(all));
  };
};
