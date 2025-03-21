import { Card, CardBody, Input } from "@heroui/react";
import Image from "next/image";

import { forms } from "@/config/forms";

export default function Socials() {
  const { socials } = forms.join;

  return (
    <>
      <h2 className="w-full font-bold text-xl">Socials</h2>
      <Card
        classNames={{
          base: "bg-yellow-100",
        }}
      >
        <CardBody>
          <p>
            <span className="font-bold">Note:</span>&nbsp; We use Discord and
            Signal to communicate non-public events to our members and to build
            community. In order to ensure you don&apos;t miss out on all we have
            to offer, please provide at least Discord or Signal handle. BlueSky
            and Reddit handles are completely optional.
          </p>
        </CardBody>
      </Card>
      <div className="grid grid-cols-2 gap-4">
        {socials.active.map((field) => (
          <Input
            key={field.id}
            isRequired={field.required}
            label={field.label}
            labelPlacement="outside"
            name={field.id}
            placeholder={field.placeholder ?? field.label}
            startContent={
              <Image
                alt={`${field.label} icon`}
                height={24}
                src={field.iconPath}
                width={24}
              />
            }
            type={field.type}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {socials.passive.map((field) => (
          <Input
            key={field.id}
            isRequired={field.required}
            label={field.label}
            labelPlacement="outside"
            name={field.id}
            placeholder={field.placeholder ?? field.label}
            startContent={
              <Image
                alt={`${field.label} icon`}
                height={24}
                src={field.iconPath}
                width={24}
              />
            }
            type={field.type}
          />
        ))}
      </div>
    </>
  );
}
