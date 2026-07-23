import type { EffectCallback } from "react";

import { useEffect } from "react";

function useOnMount(callback: EffectCallback) {
  useEffect(callback, []);
}

export default useOnMount;
