import { title, subtitle } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About Us</h1>
      <p className={subtitle({ class: "mt-4" })}>Coming soon!</p>
    </div>
  );
}
