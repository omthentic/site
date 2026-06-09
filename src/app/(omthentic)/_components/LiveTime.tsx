"use client";

import { useEffect, useState } from "react";

export function LiveTime() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const tick = () => {
      const s = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Europe/London",
      }).format(new Date());
      setTime(s);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return <span className="live-time">{time}</span>;
}
