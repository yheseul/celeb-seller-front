import { CameraOutlined } from "@ant-design/icons";

const ImageUpload = () => {
  return (
    <>
      <div className="border size-28 sm:size-40 shrink-0 border-gray-200 bg-gray-100 flexColCenter justify-center rounded-md text-gray-500">
        <CameraOutlined />
        <p>이미지 등록</p>
      </div>
      <input type="file" className="hidden" />
    </>
  );
};

export default ImageUpload;
