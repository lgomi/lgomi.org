import { Input, Select, SelectItem } from "@heroui/react";

import { forms } from "@/config/forms";

export default function PersonalInfo() {
  const { personal } = forms.join;

  return (
    <>
      <h2 className="w-full font-bold text-xl">Personal details</h2>
      <div className="grid grid-cols-2 gap-4">
        {personal.map((field) => {
          switch (field.fieldType) {
            case "input":
              return (
                <Input
                  key={field.id}
                  errorMessage={field.errorMessage}
                  isRequired={field.required}
                  label={field.label}
                  labelPlacement="outside"
                  name={field.id}
                  placeholder={field.placeholder ?? field.label}
                  type={field.type}
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
                          {option.counties && (
                            <span className="text-tiny text-default-400 italic">
                              {option.counties.join(", ")}
                            </span>
                          )}
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
