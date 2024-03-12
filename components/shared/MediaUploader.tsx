import React from "react";
import { useToast } from "@/components/ui/use-toast";
import{ CldUploadWidget} from "next-cloudinary"
const MediaUploader = () => {
  const { toast } = useToast();
  const onUploadSuccessHandlar=(result:any)=>{
    toast({
        title:'Image Uploaded Successfully',
        description:'1 credit used',
        duration:5000,
        className:'succsess-toast'
    })
  }
  const onUploadErrorHandlar=()=>{
    toast({
        title:'Somthing went Wrong while uploading',
        description:'plaeas try again',
        duration:5000,
        className:'error-toast'
    })
  }
  return (
    <CldUploadWidget
    uploadPreset="jsm_imaginify"
    options={{
        multiple:false,
        resourceType:"image",

    }}
    onSuccess={onUploadSuccessHandlar}
    onError={onUploadErrorHandlar}
    >
        
    </CldUploadWidget>
  )
};

export default MediaUploader;
