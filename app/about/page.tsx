"use client";
// import Image from "next/image";
import { Accordion, AccordionItem } from "@heroui/react";

import { title } from "@/components/primitives";

export default function AboutPage() {
  const itemClasses = {
    title: "text-xl font-bold",
  };

  return (
    <div>
      <h1 className={title({ class: "mb-6 block text-center" })}>About Us</h1>
      <Accordion
        defaultExpandedKeys={["1", "4"]}
        itemClasses={itemClasses}
        selectionMode="multiple"
        variant="light"
      >
        <AccordionItem key="1" aria-label="Who We Are" title="Who We Are">
          <p className="my-6">
            Liberal Gun Owners of Michigan (LGOMi) is a community-led
            organization dedicated to building a firearm culture rooted in
            inclusivity, safety, and empowerment, not fear. We’re queer folks,
            people of color, women, working-class people, and allies who believe
            the right to self-defense belongs to all of us, not just those
            who’ve always had access.
          </p>
          <h3 className="text-md font-bold">We are not a militia.</h3>
          <p className="my-6">
            We don’t train for war, we build skills for safety, empowerment, and
            community care.
          </p>
          <h3 className="text-md font-bold">
            We are a community safety and education organization.
          </h3>
          <p className="my-6">
            We teach, we train, and we show up, because everyone deserves the
            tools to protect themselves and their communities.
          </p>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Our Vision & Mission"
          title="Our Vision & Mission"
        >
          <p className="my-6">
            Liberal Gun Owners of Michigan envisions a future where every
            person, regardless of gender, race, sexuality, or income has access
            to the knowledge, tools, and community needed to feel safe and
            empowered.
          </p>
          <p className="my-6">
            We are committed to reshaping firearm culture into one rooted in
            responsibility, inclusion, and care, not intimidation or exclusion.
          </p>
          <ul className="my-6 list-disc px-12">
            <li>
              <span className="font-bold">Expanding Access</span>{" "}
              <span>
                We make firearm training, CPL certification, and community
                defense tools accessible to those historically left out of gun
                spaces.
              </span>
            </li>
            <li>
              <span className="font-bold">Empowering People</span>{" "}
              <span>
                Through education and mentorship, we give new and experienced
                gun owners the confidence to advocate for their safety and their
                communities.
              </span>
            </li>
            <li>
              <span className="font-bold">Shifting Culture</span>{" "}
              <span>
                We challenge the toxic norms of traditional gun culture by
                building something better—one based in compassion,
                skill-building, and solidarity.
              </span>
            </li>
            <li>
              <span className="font-bold">Lasting Safety</span>{" "}
              <span>
                We’re here for the long haul, creating community defense
                ecosystems that protect and uplift everyone—not just the
                privileged few.
              </span>
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Official Position Statement"
          title="Official Position Statement"
        >
          <blockquote className="my-6 px-12 py-6 font-bold border border-solid">
            The right to bear arms intersects with constitutional law, public
            safety, and systemic injustice. Our position is clear: responsible
            gun ownership must be inclusive, accessible, and rooted in community
            care—not fear or exclusion.
          </blockquote>
          <h3 className="font-bold">The Complexity of the Second Amendment</h3>
          <p className="my-6">
            Second Amendment rights are not simple. They live at the
            intersection of constitutional law, public safety, cultural
            identity, and systemic injustice. Every conversation about firearms
            is deeply nuanced, too nuanced to be reduced to political soundbites
            or one-size-fits-all legislation.
          </p>
          <p className="my-6">
            We acknowledge that this complexity deserves thoughtful engagement,
            not reactionary policy.
          </p>

          <h3 className="font-bold">Rights, Responsibility, and Modern Arms</h3>
          <p className="my-6">
            The U.S. Constitution and Michigan Constitution affirm the
            fundamental human right to bear arms—not just for individual
            defense, but for the protection of one’s community and country. Just
            as the right to free speech now includes digital expression, so too
            must the right to bear arms reflect access to modern tools of
            self-defense.
          </p>
          <p className="my-6">
            With the right to bear arms comes the responsibility to train,
            store, and carry safely.
          </p>
          <p className="my-6">
            Safe storage, training, and accountability are essential pillars of
            that right. Gross negligence with firearms should be addressed
            seriously by both the community and the law.
          </p>

          <h3 className="font-bold">Disarmament is Not Equity</h3>
          <p className="my-6">
            Historically, gun control laws in the U.S. have often served to
            disarm marginalized communities—not to increase public safety.
            Today, we see that pattern continue in laws that are enforced
            disproportionately against Black, brown, queer, poor, and disabled
            individuals.
          </p>
          <p className="my-6">
            Until systemic injustice is dismantled, further restrictions on gun
            ownership will only increase harm against the very people they claim
            to protect.
          </p>
          <p className="my-6">
            We cannot meaningfully discuss firearm restrictions without first
            addressing injustice, bias, and enforcement disparity.
          </p>

          <h3 className="font-bold">Real Safety Requires Real Support</h3>
          <p className="my-6">
            The root causes of violence in America run far ,deeper than firearm
            access. What we need is not more restrictions—but more rights.
          </p>
          <p className="my-6">We support expanded access to:</p>
          <ul className="my-6 list-disc px-12">
            <li>Mental healthcare</li>
            <li>Affordable and stable housing</li>
            <li>Safe drinking water</li>
            <li>Nutritious food</li>
            <li>Quality education</li>
            <li>Freedom from oppression in all its forms</li>
          </ul>
          <p className="my-6">
            A safer world isn’t created by disarming vulnerable people. It’s
            created by empowering them.
          </p>
        </AccordionItem>
        <AccordionItem key="4" aria-label="Join Us" title="Join Us">
          <p>
            Ready to join? Scan/Click the QR Code below to join our Discord
            Server:
          </p>
          <a
            className="flex justify-center"
            href="https://disboard.org/server/1344828860935569519"
            rel="noreferrer"
            target="_blank"
          >
            <img
              alt="Liberal Gun Owners of Michigan Discord server qr code"
              height={300}
              src="/lgomi_qr_code.png"
              width={300}
            />
          </a>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
