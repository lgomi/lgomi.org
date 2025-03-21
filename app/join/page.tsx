import JoinForm from "@/components/custom/JoinForm/JoinForm";
import { title } from "@/components/primitives";

export default function JoinPage() {
  return (
    <div>
      <h1 className={title({ class: "mb-6 block" })}>Request to Join</h1>
      <JoinForm />
    </div>
  );
}
