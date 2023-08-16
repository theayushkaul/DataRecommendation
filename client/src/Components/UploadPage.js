import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { read, utils } from "xlsx"; // Import necessary functions and objects from xlsx
import axios from "axios";
import { RiFileExcel2Fill } from "react-icons/ri";

function UploadPage() {
  const [file, setFile] = useState(null);
  const [fileData, setFileData] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileDrop = async (acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    setFile(selectedFile);

    try {
      const reader = new FileReader();
      reader.onload = function (e) {
        const data = new Uint8Array(e.target.result);
        const workbook = read(data, { type: "array" }); // Use read function
        const firstSheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[firstSheetName];
        const result = utils.sheet_to_json(sheet, { header: 1 }); // Use utils object
        setFileData(result);
      };
      reader.readAsArrayBuffer(selectedFile);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadFile = async () => {
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);

      try {
        setUploadStatus("Uploading...");
        await axios.post("/upload", data);
        setUploadStatus("Uploaded Successfully");
      } catch (error) {
        setUploadStatus("Upload Failed");
        console.log(error);
      }
    }
  };

  return (
    <div>
      <Dropzone onDrop={handleFileDrop} accept=".xlsx">
        {({ getRootProps, getInputProps }) => (
          <div className="dropzone" {...getRootProps()}>
            <div className="flex justify-center items-center my-8">
              <input {...getInputProps()} />
              <p className="flex justify-center items-center cursor-pointer p-4 bg-green-300 hover:bg-green-500 w-max border-black border-[1.4px] rounded-xl font-bold my-4">
                Drop an Excel File
                <RiFileExcel2Fill className="text-2xl ml-2" />
              </p>
            </div>
            {file ? (
              <div className="flex flex-col justify-center items-center">
                <div className="file-preview flex flex-col items-center mt-5">
                  <h3 className="font-bold text-lg">File Preview:</h3>
                  <table className="w-screen m-6 h-max table-auto border-separate border-spacing-2">
                    <thead className="my-3 border-separate border border-slate-500">
                      <tr>
                        {fileData[0]?.map((cell, index) => (
                          <th
                            className=" border border-slate-600 p-3 bg-green-200"
                            key={index}
                          >
                            {cell}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {fileData.slice(1).map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, cellIndex) => (
                            <td
                              className="border border-slate-700 p-2 bg-slate-100"
                              key={cellIndex}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <button
                  className="outfit bg-green-400 text-black rounded-lg px-4 hover:bg-green-500 font-bold w-max p-2 mb-8"
                  onClick={uploadFile}
                >
                  Upload
                </button>
                {uploadStatus && <p>{uploadStatus}</p>}
              </div>
            ) : (
              <>
                <div className="elsie w-full h-max my-44 text-7xl flex justify-center items-center">
                  <p className="bg-[#EAF2D7] p-8 rounded-3xl"> Waiting for you to Upload...</p>
                </div>
              </>
            )}
          </div>
        )}
      </Dropzone>
    </div>
  );
}

export default UploadPage;
