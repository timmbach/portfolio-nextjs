"use client";

import { getCurrentTime } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Clock() {
  const [timeNow, setTimeNow] = useState("");

  useEffect(() => {
    const initialId = window.setTimeout(() => setTimeNow(getCurrentTime), 0);
    const intervalId = window.setInterval(
      () => setTimeNow(getCurrentTime),
      1000,
    );
    return () => {
      window.clearTimeout(initialId);
      window.clearInterval(intervalId);
    };
  }, []);

  return <div className="text-lg">{timeNow}</div>;
}
