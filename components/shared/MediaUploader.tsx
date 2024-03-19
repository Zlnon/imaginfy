'use client'
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { dataUrl, getImageSize } from "@/lib/utils";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";

type MediaUploaderPops = {
  onValueChnage: (value: string) => void;
  setImage: React.Dispatch<any>;
  publicId: string;
  image: any;
  type: string;
};

const MediaUploader = ({
  onValueChnage,
  setImage,
  publicId,
  image,
  type,
}: MediaUploaderPops) => {
  const { toast } = useToast();
  const onUploadSuccessHandlar = (result: any) => {
    setImage((prevState:any)=>({
      ...prevState,
      publicId:result?.info?.public_id,
      width:result?.info?.width,
      height:result?.info?.height,
      secureURL:result?.info?.secure_url,
    }))

    onValueChnage(result?.info?.public_id)
    toast({
      title: "Image Uploaded Successfully",
      description: "1 credit used",
      duration: 5000,
      className: "success-toast",
    });
  };
  const onUploadErrorHandlar = () => {
    toast({
      title: "Somthing went Wrong while uploading",
      description: "plaeas try again",
      duration: 5000,
      className: "error-toast",
    });
  };
  return (
    <CldUploadWidget
      uploadPreset="jsm_imaginify"
      options={{
        multiple: false,
        resourceType: "image",
      }}
      onSuccess={onUploadSuccessHandlar}
      onError={onUploadErrorHandlar}
    >
      {({ open }) => (
        <div className="flex flex-col gap-4">
          <h3 className="h3-bold text-dark-600">original</h3>
          {publicId ? (
            <>
            <div className="cursor-pointer overflow-hidden rounded-[10px]">
              <CldImage
                width={getImageSize(type,image,"width")}
                height={getImageSize(type,image,"height")}
                src={publicId}
                alt="image"
                sizes={"(max-width:767px) 100vw, 50vw "}
                placeholder={dataUrl as PlaceholderValue}
                className="media-uploader_cldImage"
              />
              </div> 
              </>
          ) : (
            <div className="media-uploader_cta" onClick={() => open()}>
              <div className="media-uploader_cta-image">
                <Image
                  src="/assets/icons/add.svg"
                  alt="Add Image"
                  width={24}
                  height={24}
                />
              </div>
                <p className="p-14-medium">Upload Image here</p>
            </div>
          )}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default MediaUploader;
