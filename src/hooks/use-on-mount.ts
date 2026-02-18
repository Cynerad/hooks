import type { EffectCallback } from "react";

import { useEffect } from "react";

export default function useOnMount(callback: EffectCallback) {
  useEffect(callback, []);
}
