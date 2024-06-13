import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "~/components/ui/button";
import { deleteImage, getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  const idAsNumber = Number(props.id);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);
  
  return (
    <div className="flex h-screen w-screen text-white">
      <div className="flex flex-grow items-center justify-center">
        <img src={image.url} className="max-h-full max-w-full object-contain" />
      </div>
      
      <div className="flex w-96 flex-shrink-0 flex-col overflow-y-auto border-l">
        <div className="border-b p-4">
          <h2 className="text-xl font-bold">{image.name}</h2>
        </div>
        
        <div className="p-4">
          <p className="mb-2">
            Uploaded by:{" "}
            <span className="font-semibold">{uploaderInfo.fullName}</span>
          </p>
          <p className="mb-4">
            Created on:{" "}
            <span className="font-semibold">
              {new Date(image.createdAt).toLocaleString()}
            </span>
          </p>
          <form
            action={async () => {
              "use server";
              await deleteImage(idAsNumber);
            }}
          >
            <Button variant="destructive" type="submit">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
