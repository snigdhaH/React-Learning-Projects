useState → lets React components remember values across renders.

setCount(count + 1) → may use stale value.
setCount((c) => c + 1) → always uses latest value ✅.

Two setCount(count + 1) calls → final = 1.
Two setCount((c) => c + 1) calls → final = 2.

onClick={setCount(0)} → runs immediately ❌.
onClick={() => setCount(0)} → runs only on click ✅.

key={count} → forces React to remount element so animation restarts