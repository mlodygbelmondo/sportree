import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-beige flex min-h-screen w-full items-center justify-center">
      <Image
        src="/images/coming-soon.png"
        alt="coming soon"
        width={200}
        height={200}
      />
    </main>
  );
}
