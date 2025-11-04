import React from "react";
import { cn } from "@/lib/utils";

export default function ProductPrice({
  value,
  className,
}: {
  value: number;
  clasName?: string;
}) {
  const stringValue = value.toFixed(2);
  const [entera, decimales] = stringValue.split(".");
  return (
    <>
      <p className={cn("text-2xl", className)}>
        <span className="text-xs align-super">€</span>
        {entera}
        <span className="text-xs align-super">.{decimales}</span>
      </p>
    </>
  );
}
