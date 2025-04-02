// import Image from "next/image";

import { title } from "@/components/primitives";

export default function EventsPage() {
  return (
    <div>
      <h1 className={title({ class: "mb-6 block" })}>Events</h1>
      <img
        alt="Coming Soon"
        height={500}
        src="/coming-soon.png"
        width={500}
      />
    </div>
  );
}
