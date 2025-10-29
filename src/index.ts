import { useEffect, EffectCallback, DependencyList } from "react";

/**
 * A wrapper for React's useEffect that provides a default empty dependency array.
 * - Omit `deps` to run only once (like `[]`)
 * - Pass `null` to run every render (like native `useEffect(effect)`)
 * - Pass a normal array to behave normally
 */
export const useEffectForDummies = (
  effect: EffectCallback,
  deps?: DependencyList | null
): void => {
  if (deps === null) {
    useEffect(effect);
  } else if (deps === undefined) {
    useEffect(effect, []);
  } else {
    useEffect(effect, deps);
  }
}

export default useEffectForDummies;
