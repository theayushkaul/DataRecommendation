import React, { useState, useContext } from 'react'
import Dropzone from 'react-dropzone';
import { read, utils } from 'xlsx'; // Import necessary functions and objects from xlsx
import axios from 'axios';
import { Context } from "../Context/context";
function UploadPage() {
  const [file, setFile] = useState(null);
  const [fileData, setFileData] = useState([]);
  const [uploadStatus, setUploadStatus] = useState('');
  const { user, dispatch, authToken } = useContext(Context);

  const handleFileDrop = async (acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    setFile(selectedFile);

    try {
      const reader = new FileReader();
      reader.onload = function (e) {
        const data = new Uint8Array(e.target.result);
        const workbook = read(data, { type: 'array' }); // Use read function
        const firstSheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[firstSheetName];
        const result = utils.sheet_to_json(sheet, { header: 1 }); // Use utils object
        setFileData(result);
      };
      reader.readAsArrayBuffer(selectedFile);
    } catch (error) {
    }
  };

  const uploadFile = async () => {
    if (file) {
      dispatch({ type: "UPDATE_START" });
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      const config = {
        headers: {
          authToken: authToken,
        },
      };
      try {
        setUploadStatus('Uploading...');
        await axios.post('/upload', data);
        const res = await axios.put(`/user/update/${user._id}`, { dataSet: filename }, config);
        dispatch({ type: "UPDATE_SUCCESS", payload: { user: res.data } });
        setUploadStatus('Uploaded Successfully');
      } catch (error) {
        setUploadStatus('Upload Failed');
        dispatch({ type: "UPDATE_FAILURE" });
      }
    }
  };

  return (
    <div>
      <Dropzone onDrop={handleFileDrop} accept=".xlsx">
        {({ getRootProps, getInputProps }) => (
          <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag & drop an Excel file here, or click to select one.</p>
            {file && (
              <div className="file-preview">
                <h3>File Preview:</h3>
                <table>
                  <thead>
                    <tr>
                      {fileData[0]?.map((cell, index) => (
                        <th key={index}>{cell}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {fileData.slice(1).map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </Dropzone>
      <button
        className="outfit bg-green-400 text-white rounded-lg px-4 hover:bg-green-600 w-full"
        onClick={uploadFile}
      >
        Upload
      </button>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
}

export default UploadPage;
