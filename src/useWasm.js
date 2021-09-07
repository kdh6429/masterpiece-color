import { useEffect, useState } from 'react';
import * as AsBind from "as-bind";

export const useWasm = () => {
  const [state, setState] = useState(null);
  useEffect(() => { 
    const fetchWasm = async () => {
      const wasm = await fetch('lib.wasm');
      const instance = await AsBind.instantiate(wasm, {});
      setState(instance);
    };
    fetchWasm();
  }, []);
  return state;
}