import { useState, useCallback, useEffect } from 'react';

export const useCountdown = (seconds: number = 3, onComplete?: () => void) => {
  const [count, setCount] = useState<number | null>(null);

  const startCountdown = useCallback(() => {
    setCount(seconds);
  }, [seconds]);

  useEffect(() => {
    if (count === null) return;
    if (count === 0) {
      if (onComplete) onComplete();
      setCount(null);
      return;
    }
    const timer = setTimeout(() => setCount((prev) => (prev !== null ? prev - 1 : 0)), 1000);
    return () => clearTimeout(timer);
  }, [count, onComplete]);

  return { count, startCountdown, isCounting: count !== null };
};