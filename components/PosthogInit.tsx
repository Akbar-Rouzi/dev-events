"use client";

import { useEffect } from "react";
import { initPosthog } from "../instrumentation-client";

export default function PosthogInit() {
  useEffect(() => {
    initPosthog();
  }, []);
  return null;
}
