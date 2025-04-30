import { peelCheck } from "./utils/peelCheck/peelCheck.ts";

peelCheck(
  { "1,1": "A", "1,2": "A", "1,3": "A", "1,4": "A", "1,5": "B" },
  { letters: { A: 3, B: 1 } }
);
