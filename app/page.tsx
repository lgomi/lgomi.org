// import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <img
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
          className="mb-4 font-bold text-blue-500 flex justify-center gap-2"
          href="https://bsky.app/profile/lgomi.bsky.social"
        >
          <img
            alt="Bluesky butterfly logo"
            height={24}
            src="/bluesky-logo.png"
            width={24}
          />
          @lgomi.bsky.social
        </a>
        <p>or scan/click the QR Code below to join our Discord Server:</p>
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
      </div>
    </section>
  );
}
