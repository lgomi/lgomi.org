"use client";
import { useForm } from "react-hook-form";
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

import { FormData } from "@/types/FormData";
import { sendEmail } from "@/utils/send-email";
import HoneyPot from "@/components/custom/HoneyPot/HoneyPot";
import { forms } from "@/config/forms";

export default function ContactForm() {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <Card className="p-4">
      <Form className="gap-4" onSubmit={handleSubmit(onSubmit)}>
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
                  placeholder={field.placeholder ?? field.label}
                  validate={field.validation}
                  {...register(
                    field.id as "email" | "name" | "subject" | "message",
                    { required: field.required },
                  )}
                />
              );
            } else {
              return (
                <Input
                  key={field.id}
                  errorMessage={field.errorMessage}
                  isRequired={field.required}
                  label={field.label}
                  placeholder={field.placeholder ?? field.label}
                  type={field.type}
                  {...register(
                    field.id as "email" | "name" | "subject" | "message",
                    { required: field.required },
                  )}
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
