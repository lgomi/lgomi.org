import Image from "next/image";

import Disclaimer from "@/components/custom/Disclaimer/Disclaimer";
import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title({ class: "mb-6 block text-center" })}>About Us</h1>
      <div>
        <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
          <p>
            A well regulated Militia, being necessary to the security of a free
            State, the right of the people to keep and bear Arms, shall not be
            infringed.
          </p>
          <p className="text-right italic mt-4 text-sm">
            - <cite>Second Amendment of the United States Constitution</cite>
          </p>
        </blockquote>
        <p className="my-6">
          The <span>Second Amendment</span> assures the right to bear arms for
          all Americans, not just conservatives. Despite centrist
          Democrats&apos; misguided but thus far effective efforts to pass
          legislation infringing on Second Amendment rights, gun ownership is on
          the rise in liberal and leftist circles.
        </p>
        <p className="my-6">
          Liberal Gun Owners of Michigan is a homegrown diverse and inclusive
          social organization with members across the state dedicated to
          building a community of who share common bonds around firearm
          ownership and left-of-center ideology (and likely D&D too).
        </p>
        <p className="my-6">
          Our aim is to foster opportunities for our members to meet at local
          ranges or on private property or state land to learn how to shoot or
          to improve existing skills. Other opportunities we may facilitate
          include:
        </p>
        <ul className="my-6 pl-16 list-disc">
          <li>CPL and firearms education classes</li>
          <li>Local political protests and rallies</li>
          <li>Volunteering opportunities</li>
          <li>First aid / triage classes</li>
          <li>FFL services</li>
          <li>...and more!</li>
        </ul>
        <p className="my-6">
          Members of all firearms skill levels are welcome, whether you&apos;ve
          never held a gun in your life or you&apos;re an expert marksman.
        </p>
        <Disclaimer background="red-200" border="red-500">
          <p className="my-4 italic">
            <span className="font-bold">Disclaimer:</span> We are not a militia
            or paramilitary organization.
          </p>
          <p className="my-4">
            We are a social organization focused on safety, education,
            community, and inclusion. Any claims or assertions that LGOMi is a
            militant organization of any sort will taken seriously.
          </p>
          <p className="my-4">
            All participation in this organization shall done in a peaceful
            manner. All participants are expected to conduct themselves in
            compliance with the laws of the state of Michigan the US government.
          </p>
        </Disclaimer>
      </div>
      <h1 className={title()}>Membership</h1>
      <div>
        <p className="my-6">
          We are a voluntary network of like-minded individuals across the
          state. We plan social meetups and range events using Discord and
          Signal.
        </p>
        <p className="my-6">
          At the present time, we charge no dues to join. By participating in
          in-person events, you assume all responsibility for your safety and
          your behavior and are expected to pay your own range fees (if
          applicable) and the cost of your ammo. You are also accountable for
          your own conduct in all online channels.
        </p>
        <p className="my-6">
          We are a new organization, still in the process of electing a board,
          establishing bylaws, and obtaining our non-profit 501c(4) status. Once
          established, our bylaws allow for an additional dues-based level of
          membership that may provide additional benefits.{" "}
        </p>
        <p className="my-6">
          If you&apos;d like to join our growing ranks,{" "}
          <span className="hidden">
            apply using the <span className="font-bold">Request to Join</span>{" "}
            button above
          </span>
          scan or click the QR code below to join our Discord server.
        </p>
        <a
          className="flex justify-center"
          href="https://disboard.org/server/1344828860935569519"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            alt="Liberal Gun Owners of Michigan Discord server qr code"
            height={300}
            src="/qr_code.png"
            width={300}
          />
        </a>
      </div>
    </div>
  );
}
