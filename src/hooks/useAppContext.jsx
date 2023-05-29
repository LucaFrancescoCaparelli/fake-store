import { AppContext } from "../context/Context";
import { useContext } from "react";

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used with a AppProvier");
  }
  return context;
}
