import { Textarea, Select, SelectItem } from "@heroui/react";

import { forms } from "@/config/forms";

export default function Interview() {
  const { interview } = forms.join;

  return (
    <>
      <h2 className="w-full font-bold text-xl">About you</h2>
      <div className="flex flex-col gap-4">
        {interview.map((field) => {
          switch (field.fieldType) {
            case "textarea":
              return (
                <Textarea
                  key={field.id}
                  isClearable
                  isRequired={field.required}
                  label={field.label}
                  labelPlacement="outside"
                  maxRows={10}
                  name={field.id}
                  placeholder={field.placeholder}
                  validate={field.validation}
                />
              );
            case "select":
              return (
                <Select
                  key={field.id}
                  isRequired={field.required}
                  items={field.options}
                  label={field.label}
                  labelPlacement="outside"
                  name={field.id}
                  placeholder={field.placeholder}
                >
                  {(option) => (
                    <SelectItem key={option.key} textValue={option.label}>
                      <div className="flex gap-2 items-center">
                        <div className="flex flex-col">
                          <span className="text-md font-semibold">
                            {option.label}
                          </span>
                        </div>
                      </div>
                    </SelectItem>
                  )}
                </Select>
              );
            default:
              return null;
          }
        })}
      </div>
    </>
  );
}
