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
    const layoutItems = getState().layoutItemsSlice.layoutItems;
    dispatch(setGridLayoutConfig(all));
    if (isEditable && layoutItems.length > 0) {
      await updateGridLayoutConfig({
        updatedGridLayoutConfig: all,
      });
    }
  };
};
