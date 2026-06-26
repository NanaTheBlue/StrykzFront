import { useEffect, useRef } from "react";

export function useNotifications() {
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    ws.current = new WebSocket("ws://api.strykz.net/notifications");

    ws.current.onopen = () => {
      console.log("Connected");
    };

    ws.current.onmessage = (event) => {
      console.log(event.data);
    };

    return () => {
      ws.current?.close();
    };
  }, []);

  return ws.current;
}
