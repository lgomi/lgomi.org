import type { TExternalResources } from "@/config/resources";

type TSelectionMode = "multiple" | undefined;
type TVariant = "light" | "shadow" | "bordered" | "splitted" | undefined;

export interface IResourcesAccordionProps {
  selectionMode?: TSelectionMode;
  variant?: TVariant;
  content: TExternalResources;
}
