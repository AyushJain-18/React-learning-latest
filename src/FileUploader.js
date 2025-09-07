import React, { useState } from "react";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.readAsText(selectedFile); // Read file as text
      // Alternatively, use readAsArrayBuffer() or readAsBinaryString() for other formats
      reader.onload = (event) => {
        const fileData = event.target.result;
        // Send fileData to server or perform further processing
        console.log("File data:", fileData);
      };
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;
