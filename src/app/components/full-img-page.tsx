import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);
  return (
    <div className="flex h-full w-screen min-w-0 items-center justify-center text-white">
      <div className="flex-shrink flex-grow">
        <img src={image.url} className="w-96 object-contain" />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <div className="border-b text-center text-lg">{image.name}</div>
        <div className="flex flex-col p-2">
          <span>Uploaded by: {uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Created on: {new Date(image.createdAt).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
