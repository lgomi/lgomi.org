import { Checkbox } from "@heroui/react";

export default function HoneyPot() {
  return (
    <Checkbox className="hidden" defaultSelected={false} name="bot">
      Click here if you are a human
    </Checkbox>
  );
}
