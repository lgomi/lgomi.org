import { title, subtitle } from "@/components/primitives";

export default function ContactPage() {
  return (
    <div>
      <h1 className={title()}>Get in Touch!</h1>
      <p className={subtitle({ className: "mt-4" })}>Coming soon!</p>
    </div>
  );
}
