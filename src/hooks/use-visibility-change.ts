import { useSyncExternalStore } from "react";

function useVisibilityChangeSubscribe(callback) {
  document.addEventListener("visibilitychange", callback);

  return () => {
    document.removeEventListener("visibilitychange", callback);
  };
}

function getVisibilityChangeSnapshot() {
  return document.visibilityState;
}

function getVisibilityChangeServerSnapshot(): string {
  throw new Error("useVisibilityChange is a client-only hook");
}

function useVisibilityChange() {
  const visibilityState = useSyncExternalStore(
    useVisibilityChangeSubscribe,
    getVisibilityChangeSnapshot,
    getVisibilityChangeServerSnapshot,
  );

  return visibilityState === "visible";
}

export default useVisibilityChange;
