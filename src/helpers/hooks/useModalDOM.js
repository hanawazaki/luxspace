import { useLayoutEffect } from "react";
import { addClass } from "helpers/format/classNameModifier";

export default function useModalDOM() {
  useLayoutEffect(() => {
    return () => {};
  });
}
