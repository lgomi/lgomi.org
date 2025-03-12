import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About Us</h1>
      <div>
        <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800 italic">
          A well regulated Militia, being necessary to the security of a free
          State, the right of the people to keep and bear Arms, shall not be
          infringed.
        </blockquote>
        <p className="my-6">
          The <span>Second Amendment</span> assures the right to bear arms for
          all Americans, not just conservatives. Despite centrist
          Democrats&apos; misguided but surprisingly effective efforts to pass
          legislation infringing on 2A rights, gun ownership is on the rise in
          liberal and leftist circles. <span>We are one of them.</span>
        </p>
        <p className="my-6">
          Liberal Gun Owners of Michigan is a homegrown diverse and inclusive
          social organization with members across the state dedicated to
          building a community of who share the common bonds of firearm
          ownership and liberal ideology (and likely D&D too).
        </p>
        <p className="my-6">
          Our aim is to foster opportunities for our members to meet at local
          ranges or on private property or state land to learn how to shoot or
          to improve existing skills. Other opportunities we may facilitate
          include:
        </p>
        <ul className="my-6">
          <li>Local political protests</li>
          <li>Volunteering opportunities</li>
          <li>First aid / triage classes</li>
          <li>CPL and shooting courses</li>
          <li>...and more!</li>
        </ul>
        <p className="my-6">
          Members of all firearms skill levels are welcome, whether you&apos;ve
          never held a gun in your life or you&apos;re an expert marksman. If
          you&apos;re interested in joining, smash that{" "}
          <span>Get in Touch</span> button above.
        </p>
      </div>
    </div>
  );
}
