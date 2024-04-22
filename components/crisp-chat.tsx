"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("d489107a-4434-40f4-8631-75b1e4a031e2");
  }, []);

  return null;
};