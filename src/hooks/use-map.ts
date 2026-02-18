import { useReducer, useRef } from "react";

function useMap<K, V>(initialEntries?: readonly (readonly [K, V])[] | null) {
  const mapRef = useRef(new Map<K, V>(initialEntries));
  const [, reRender] = useReducer(x => x + 1, 0);

  const set = (key: K, value: V) => {
    mapRef.current.set(key, value);
    reRender();
    return mapRef.current;
  };

  const clear = () => {
    mapRef.current.clear();
    reRender();
  };

  const remove = (key: K) => {
    const res = mapRef.current.delete(key);
    reRender();
    return res;
  };

  return {
    map: mapRef.current,
    set,
    clear,
    remove,
  };
}

export default useMap;
