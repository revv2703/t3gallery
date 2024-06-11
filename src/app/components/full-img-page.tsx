import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";


export default async function FullPageImageView(props: {id: number}) {
    const image = await getImage(props.id);
    
    const uploaderInfo = await clerkClient.users.getUser(image.userId);
  return (
    <div className="flex w-full h-full min-w-0">
      <div className="flex flex-shrink justify-center items-center">
        <img src={image.url} className="w-96 object-contain" />
      </div>
      <div className="w-48 flex flex-col flex-shrink-0 border-l">
        <div className="text-lg text-center border-b">{image.name}</div>
        <div className="flex flex-col p-2">
          <span>Uploaded by: {uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Created on: {new Date(image.createdAt).toLocaleString()}</span>
        </div>
      </div>
    </div>
  )
}