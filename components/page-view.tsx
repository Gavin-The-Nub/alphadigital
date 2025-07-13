"use client";

import * as React from "react";

export function PageView({ ingestKey }: { ingestKey: any }) {
  const sendEvent = () => {};
  React.useEffect(() => {
    sendEvent();
  }, [ingestKey]);

  return null;
}
