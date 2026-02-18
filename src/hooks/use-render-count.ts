import { useRef } from "react";

function useRenderCount() {
  const count = useRef(0);

  count.current++;

  return count.current;
}

export default useRenderCount;
