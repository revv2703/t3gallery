import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 p-4">
      {images.map((image) => (
        <div key={image.id} className="mb-4 break-inside-avoid">
          <Link href={`/img/${image.id}`}>
            <div className="relative">
              <Image
                src={image.url}
                alt={image.name}
                className="w-full h-auto rounded-lg"
                width={1920}
                height={1080}
              />
            </div>
          </Link>
          <div className="mt-2 text-sm">{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}