"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("03265a06-f02d-4dd7-abf3-580f25e6072b");
  }, []);

  return null;
};
