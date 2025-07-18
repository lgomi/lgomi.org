import { FormData } from "@/types/FormData";
import { redirect } from "next/navigation";

export async function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";

  const response = await fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  }).then((res) => res.json());

  if (response.sent) {
    redirect('/');
  } else {
    alert(response.error);
  }
}
