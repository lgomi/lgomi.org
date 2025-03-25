import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-36 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <Image
          alt="LGOMI banner logo"
          height={376}
          src="/LGOMI_with_text.png"
          width={1084}
        />
      </div>
      <div className="text-center">
        <p className="mb-4">
          Apologies! We&apos;re still working on getting our website built.
        </p>

        <p className="mb-4">
          In the meantime, follow us and/or shoot us a message on BlueSky:
        </p>
        <a
          className="mb-4 font-bold text-blue-500"
          href="https://bsky.app/profile/lgomi.bsky.social"
        >
          @lgomi.bsky.social
        </a>
      </div>
    </section>
  );
}
