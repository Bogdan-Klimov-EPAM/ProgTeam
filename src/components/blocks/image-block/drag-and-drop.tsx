"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const DropzoneComponent = ({ handleDrop }: { handleDrop: (value) => void }) => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log("Accepted files:", acceptedFiles);
    handleDrop(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} style={dropzoneStyle}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <span>Drop the files here ...</span>
      ) : (
        <span>Drag 'n' drop some files here, or click to select files</span>
      )}
    </div>
  );
};

const dropzoneStyle = {
  width: "200px",
  height: "200px",
  borderWidth: "2px",
  borderColor: "#666",
  borderStyle: "dashed",
  borderRadius: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

export default DropzoneComponent;