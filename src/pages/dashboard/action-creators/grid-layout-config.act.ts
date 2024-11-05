import { AppDispatch } from "@/common/hooks/useAppDispatch";
import { setGridLayoutConfig } from "../reducers/grid-layout-config.reducer";
import { updateGridLayoutConfig } from "../services/dashboard.service";
import { RootState } from "@/store/store";

export const updateGridLayoutConfigAct = ({
  all,
}: {
  all: ReactGridLayout.Layouts;
}) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const isEditable = getState().authSlice.editMode;

    if (isEditable) {
      await updateGridLayoutConfig({
        updatedGridLayoutConfig: all,
      });
    }

    dispatch(setGridLayoutConfig(all));
  };
};
