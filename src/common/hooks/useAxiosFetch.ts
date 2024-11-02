import { useEffect } from "react";
import { useDispatch } from "react-redux";

function useAxiosFetch(action: any) {
  const dispatch = useDispatch();

  // TODO: Need to add loader, error handling,
  // FIXME: I will reload whenever the action changes
  // Action is a function use UseCallback
  useEffect(() => {
    dispatch(action());
  }, [action]);

  return;
}

export default useAxiosFetch;
