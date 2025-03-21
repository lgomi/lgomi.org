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
} from "@heroui/react";

import PersonalInfo from "@/components/custom/JoinForm/PersonalInfo";
import Interview from "@/components/custom/JoinForm/Interview";
import Socials from "@/components/custom/JoinForm/Socials";
import Acknowledgements from "@/components/custom/JoinForm/Acknowledgements";
import HoneyPot from "@/components/custom/HoneyPot/HoneyPot";

export default function JoinForm() {

  const onJoinFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <Card className="p-4">
        <Form className="gap-4" onSubmit={onJoinFormSubmit}>
          <CardHeader>
            <p className="mx-auto">
              If you&apos;re ready to join our diverse and inclusive community,
              please complete the membership application below.
            </p>
          </CardHeader>
          <Divider />
          <CardBody className="flex flex-col gap-4">
            <PersonalInfo />
            <Interview />
            <Socials />
            <Acknowledgements />
            <HoneyPot />
          </CardBody>
          <Divider />
          <CardFooter className="flex justify-end">
            <Button color="primary" type="submit">
              Submit Application
            </Button>
          </CardFooter>
        </Form>
      </Card>
    </>
  );
}
