"use client";

import { Accordion, AccordionItem } from "@heroui/react";

// eslint-disable-next-line import/order
import type { IResourcesAccordionProps } from "@/components/custom/ResourcesAccordion/ResourcesAccordion.types";

export default function ResourcesAccordion({
  selectionMode = "multiple",
  variant = "shadow",
  content,
}: IResourcesAccordionProps) {
  return (
    <Accordion selectionMode={selectionMode} variant={variant}>
      {content.map((section) => (
        <AccordionItem
          key={section.id}
          subtitle={section.subtitle}
          title={section.title}
        >
          <ul>
            {section.resources?.map((resource) => (
              <li key={resource.id}>
                <p>
                  <a href={resource.href}>{resource.title}</a> -{" "}
                  <span>{resource.description}</span>
                </p>
              </li>
            ))}
          </ul>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
