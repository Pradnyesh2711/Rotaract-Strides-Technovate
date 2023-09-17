import { MdFileUpload } from "react-icons/md";
import Card from "components/card";
import { useRef } from "react";

const Upload = () => {
    const fileInputRef = useRef(null);
  return (
    <Card className="h-full w-full rounded-[20px] bg-white bg-clip-border p-3 mb-3 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none 2xl:grid-cols-11">
      <div className="col-span-5 h-full w-full rounded-xl bg-lightPrimary dark:!bg-navy-700 2xl:col-span-6">
        <button onClick={() => fileInputRef.current.click()} id="upload_widget" className="flex bg-blue-300 h-full w-full flex-col items-center justify-center rounded-xl border-[2px] border-dashed border-gray-200 py-1 dark:!border-navy-700 lg:pb-0">
          <MdFileUpload className="text-[30px] text-brand-500 dark:text-white" />
          <h4 className="text-lg font-bold text-brand-500 dark:text-white">
            Upload Files
          </h4>
          <p className="my-1 text-sm font-medium text-gray-900">
            PNG, JPG and GIF files are allowed
          </p>
        </button>
        <input ref={fileInputRef} type="file" name="coverImage" id="coverImage" accept=".png, .jpeg, .jpg multiple" className="hidden"/>
      </div>
    </Card>
  );
};

export default Upload;
