import Image from "next/image";

import { title } from "@/components/primitives";

export default function ResourcesPage() {
  return (
    <div>
      <h1 className={title()}>Resources</h1>
      <Image
        alt="Coming Soon"
        height={500}
        src="/coming-soon.png"
        width={500}
      />
    </div>
  );
}
