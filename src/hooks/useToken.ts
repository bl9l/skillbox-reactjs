import {useEffect, useState} from "react";

export function useToken() {
  const [token, setToken] = useState('');

  // Компилятор ругается на неверный выхов хука
  useEffect(() => {
    if (window.__token__) {
      setToken(window.__token__);
    }
  }, []);

  return [token];
}
