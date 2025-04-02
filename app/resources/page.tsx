"use client";
// import Image from "next/image";
import { Card, CardHeader, CardBody, Divider } from "@heroui/react";

import { externalResources, clubResources } from "@/config/resources";
import { title } from "@/components/primitives";
import ResourcesAccordion from "@/components/custom/ResourcesAccordion/ResourcesAccordion";
import ResourcesModal from "@/components/custom/ResourcesModal/ResourcesModal";

export default function ResourcesPage() {
  return (
    <div>
      <h1 className={title({ class: "mb-6 block" })}>Resources</h1>
      <img
        alt="Coming Soon"
        height={500}
        src="/coming-soon.png"
        width={500}
      />
      <div className="my-12 hidden">
        <Card
          classNames={{
            header: "bg-gray-200",
            base: "mb-10",
          }}
          radius="sm"
        >
          <CardHeader>
            <h2 className="font-bold text-lg">Club resources</h2>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="max-w-md flex flex-col justify-center items-center mx-auto gap-2">
              <div id="club-rules">
                <ResourcesModal content={clubResources[0]} />
              </div>
              <div id="faq">
                <ResourcesModal content={clubResources[1]} />
              </div>
            </div>
          </CardBody>
        </Card>
        <Card
          classNames={{
            header: "bg-gray-200",
          }}
          radius="sm"
        >
          <CardHeader>
            <h2 className="font-bold text-lg">External resources</h2>
          </CardHeader>
          <Divider />
          <CardBody>
            <ResourcesAccordion content={externalResources} />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
