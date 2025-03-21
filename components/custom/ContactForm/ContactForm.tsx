"use client";
import { FormEvent } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Form,
  Input,
  Textarea,
} from "@heroui/react";

import HoneyPot from "@/components/custom/HoneyPot/HoneyPot";
import { forms } from "@/config/forms";

export default function ContactForm() {
  const onContactFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let contactData = Object.fromEntries(new FormData(event.currentTarget));
    // Todo  - add form handling logic
  };

  return (
    <Card className="p-4">
      <Form className="gap-4" onSubmit={onContactFormSubmit}>
        <CardHeader>
          <p className="text-left">
            Have questions about our organization? Not sure about joining yet?
            Interested in discussing a partnership? Shoot us a message and
            we&apos;ll be happy to answer any questions you have.
          </p>
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-col gap-4">
          {forms.contact.map((field) => {
            if (field.id === "message") {
              return (
                <Textarea
                  key={field.id}
                  isClearable
                  isRequired={field.required}
                  label={field.label}
                  maxRows={10}
                  name={field.id}
                  placeholder={field.placeholder ?? field.label}
                  validate={field.validation}
                />
              );
            } else {
              return (
                <Input
                  key={field.id}
                  errorMessage={field.errorMessage}
                  isRequired={field.required}
                  label={field.label}
                  name={field.id}
                  placeholder={field.placeholder ?? field.label}
                  type={field.type}
                />
              );
            }
          })}
          <HoneyPot />
        </CardBody>
        <Divider />
        <CardFooter className="flex justify-end">
          <Button color="primary" type="submit">
            Send
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}
