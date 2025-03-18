import { ReactNode } from "react";

interface IDisclaimerProps {
  border: string;
  background: string;
  children: ReactNode;
}

export default function Disclaimer({
  border,
  background,
  children,
}: IDisclaimerProps) {
  return (
    <div
      className={`border-1 border-${border} bg-${background} rounded-md my-6 px-4`}
    >
      {children}
    </div>
  );
}