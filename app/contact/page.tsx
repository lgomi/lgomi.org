import ContactForm from "@/components/custom/ContactForm/ContactForm";
import { title } from "@/components/primitives";

export default function ContactPage() {
  return (
    <div className="max-w-2xl">
      <h1 className={title({ class: "mb-6 block" })}>Get in Touch!</h1>
      <ContactForm />
    </div>
  );
}
