// import { SignedIn, SignedOut } from "@clerk/nextjs";
// import Image from "next/image";
// import Link from "next/link";
// import { db } from "~/server/db";
// import { getMyImages } from "~/server/queries";

// export const dynamic = "force-dynamic";

// async function Images() {
//   const images = await getMyImages();

//   return (
//     <div className="flex flex-wrap justify-center gap-4 p-4">
//       {images.map((image) => (
//         <div key={image.id} className="flex h-48 w-48 flex-col">
//           <Link href={`/img/${image.id}`}>
//             <Image
//               src={image.url}
//               alt={image.name}
//               style={{ objectFit: "contain" }}
//               width={192}
//               height={192}
//             />
//           </Link>
//           <div>{image.name}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default async function HomePage() {
//   return (
//     <main className="">
//       <SignedOut>
//         <div className="h-full w-full text-center text-2xl">
//           Please sign in above
//         </div>
//       </SignedOut>
//       <SignedIn>
//         <Images />
//       </SignedIn>
//     </main>
//   );
// }
// import { SignedIn, SignedOut } from "@clerk/nextjs";
// import Image from "next/image";
// import Link from "next/link";
// import { db } from "~/server/db";
// import { getMyImages } from "~/server/queries";

// export const dynamic = "force-dynamic";

// async function Images() {
//   const images = await getMyImages();

//   return (
//     <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//       {images.map((image) => (
//         <div key={image.id} className="flex flex-col items-center">
//           <Link href={`/img/${image.id}`}>
//             <div className="w-full relative">
//               <Image
//                 src={image.url}
//                 alt={image.name}
//                 className="object-cover"
//                 layout="responsive"
//                 width={1920}
//                 height={1080}
//               />
//             </div>
//           </Link>
//           <div className="mt-2 text-center">{image.name}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default async function HomePage() {
//   return (
//     <main className="">
//       <SignedOut>
//         <div className="h-full w-full text-center text-2xl">
//           Please sign in above
//         </div>
//       </SignedOut>
//       <SignedIn>
//         <Images />
//       </SignedIn>
//     </main>
//   );
// }

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