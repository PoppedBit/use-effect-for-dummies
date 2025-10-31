# use-effect-for-dummies

## What is this?

useEffect for Dummies was inspired by [this reddit thread](https://old.reddit.com/r/webdev/comments/1ohdteh/how_i_accidentally_broke_our_homepage_with_one/). 

Apparently, useEffect is too hard to use, and developers need their hands help to protect them against "footguns". Maybe next, I should make a package that automatically sprinkles `key`s into lists?

`use-effect-for-dummies` works exactly like `useEffect`, except for the default value for the dependency array is an empty array. You can pass `null` as the second param if you truly do not want a dependency array.

## Installation

`npm install use-effect-for-dummies`

## Usage

```tsx
import { useState } from "react";
import { useEffectForDummies } from "use-effect-for-dummies";

export default function MyComponent() {
  const [count, setCount] = useState(0);

  // no second parameter
  useEffectForDummies(() => {
    console.log("MyComponent mounted");
  });

  // second parameter is an array
  useEffectForDummies(() => {
    console.log("Count changed:", count);
  }, [count]);

  // second parameter is null, run every render
  useEffectForDummies(() => {
    console.log("MyComponent rerendered");
  }, null);

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count is {count}
    </button>
  );
}
```

