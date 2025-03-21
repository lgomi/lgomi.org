import { Checkbox } from "@heroui/react";

import { forms } from "@/config/forms";
import { ChangeEvent } from "react";

export default function Acknowledgements() {
  const { acknowledgements } = forms.join;

  return (
    <>
      <h2 className="w-full font-bold text-xl">Acknowledgements</h2>
      <div className="flex flex-col gap-4">
        {acknowledgements.map((field) => (
          <Checkbox
            key={field.id}
            classNames={{
              base: "items-start",
            }}
            color="success"
            isRequired={field.required}
            name={field.id}
          >
            {field.label}
          </Checkbox>
        ))}
      </div>
    </>
  );
}
