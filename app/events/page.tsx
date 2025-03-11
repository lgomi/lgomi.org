import { title, subtitle } from "@/components/primitives";

export default function EventsPage() {
  return (
    <div>
      <h1 className={title()}>Events</h1>
      <p className={subtitle({ className: "mt-4" })}>Coming soon!</p>
    </div>
  );
}
