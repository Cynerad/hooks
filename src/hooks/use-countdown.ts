import { useEffect, useEffectEvent, useRef, useState } from "react";

function useCountdown(endTime: number, options: {
  interval: number;
  onComplete: () => void;
  onTick: () => void;
}) {
  const [count, setCount] = useState<number | null>(null);
  const intervalIdRef = useRef<number | null>(null);

  const handleClearInterval = () => {
    if (intervalIdRef.current === null)
      return;
    window.clearInterval(intervalIdRef.current);
  };

  const onTick = useEffectEvent(() => {
    setCount((prev) => {
      if (prev === null)
        return prev;

      if (prev <= 1) {
        handleClearInterval();
        options.onComplete();
        return 0;
      }

      options.onTick();
      return prev - 1;
    });
  });

  useEffect(() => {
    intervalIdRef.current = window.setInterval(onTick, options.interval);

    return () => handleClearInterval();
  }, [options.interval]);

  useEffect(() => {
    setCount(Math.round((endTime - Date.now()) / options.interval));
  }, [endTime, options.interval]);

  return count;
}

export default useCountdown;
