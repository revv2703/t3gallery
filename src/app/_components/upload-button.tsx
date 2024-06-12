"use client";

import { useRouter } from "next/navigation";
import { useUploadThing } from "~/utils/uploadthing";
import { toast } from "sonner";

// inferred input off useUploadThing
type Input = Parameters<typeof useUploadThing>;

const useUploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    const result = await $ut.startUpload(selectedFiles);

    console.log("uploaded files", result);
    // TODO: persist result in state maybe?
  };

  return {
    inputProps: {
      onChange,
      multiple: ($ut.permittedFileInfo?.config?.image?.maxFileCount ?? 1) > 1,
      accept: "image/*",
    },
    isUploading: $ut.isUploading,
  };
};

function UploadSVG(){
  return(
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
    </svg>
  )
}


export function SimpleUploadButton(){
  const router = useRouter()
    
  const {inputProps} = useUploadThingInputProps("imageUploader", {
    onUploadBegin(){
      toast("Uploading image(s)...", {
        duration: 1000000,
        id: "upload-begin"
      })
    },
    onClientUploadComplete() {
      toast.dismiss("upload-begin")
      toast("Image(s) uploaded!", {
        duration: 2000
      });
        router.refresh();
    },
  });
  
  return(
    <div className="flex flex-row p-4">
      <label htmlFor="upload-button" className="flex items-center cursor-pointer">Upload <UploadSVG /></label>
      <input id="upload-button" type="file" className="sr-only" {...inputProps} />
    </div>
  )
}