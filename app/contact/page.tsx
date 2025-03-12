import Image from "next/image";

import { title } from "@/components/primitives";

export default function ContactPage() {
  return (
    <div>
      <h1 className={title()}>Get in Touch!</h1>
      <Image
        alt="Coming Soon"
        height={500}
        src="/coming-soon.png"
        width={500}
      />
    </div>
  );
}
