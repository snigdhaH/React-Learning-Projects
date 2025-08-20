import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="card">
        <div className="card-content">
          <motion.h1
            key={count}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="count"
          >
            {count}
          </motion.h1>

          <div className="buttons">
            <button
              onClick={() => setCount((c) => c - 1)}
              className="btn btn--danger"
            >
              -
            </button>
            <button
              onClick={() => setCount(0)}
              className="btn btn--secondary"
            >
              Reset
            </button>
            <button
              onClick={() => setCount((c) => c + 1)}
              className="btn btn--primary"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
