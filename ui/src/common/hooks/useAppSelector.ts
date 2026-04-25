import { RootState } from "@/store/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export type AppSelector = TypedUseSelectorHook<RootState>;
export const useAppSelector: AppSelector = useSelector;
