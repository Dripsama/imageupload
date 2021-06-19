import React, { useState } from "react";
<<<<<<< HEAD
=======
import { FileDrop } from "react-file-drop";
>>>>>>> f81c02744a2fa7db7ebb6c95ef2087109f2348d2
import "./Upload.css";

function Upload(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [{ src, alt }, setFile] = useState({
    src: null,
    alt: "Upload an Image",
  });

  const onFileChange = (e) => {
<<<<<<< HEAD
=======
    console.log(e.target.files[0]);
>>>>>>> f81c02744a2fa7db7ebb6c95ef2087109f2348d2
    setSelectedFile(e.target.files[0]);
    setFile({
      src: URL.createObjectURL(e.target.files[0]),
      alt: e.target.files[0].name,
    });
  };

  const onFileUpload = () => {
    if (selectedFile != null) {
      setSelectedFile(["myFile", selectedFile, selectedFile.name]);
    } else {
      alert("Please choose a file");
    }
  };

  // Details of the uploaded file
<<<<<<< HEAD
  console.log(selectedFile);

=======
  // console.log(selectedFile);
>>>>>>> f81c02744a2fa7db7ebb6c95ef2087109f2348d2
  const fileData = () => {
    if (selectedFile != null) {
      return (
        <div>
          <div className="box-preview">
            <img src={src} alt={alt}></img>
          </div>
          <h4 className="uploadTxt">File Uploaded.</h4>
        </div>
      );
    } else {
      return (
        <div>
          <div className="box-preview">
            <h4 className="choose">Choose before Pressing the Upload button</h4>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="upload-component">
      <h1 className="uploadTxt">Please Upload a File</h1>
      <div className="uploading">
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          id="actual-btn"
          onChange={onFileChange}
        />
        <label className="btn-fnc" htmlFor="actual-btn">
          Choose File
        </label>
        <input
          type="button"
          style={{ display: "none" }}
          id="upload-btn"
          onClick={onFileUpload}
        />
        <label className="btn-fnc" htmlFor="upload-btn">
          Analyze
        </label>
      </div>
<<<<<<< HEAD
      {fileData()}
=======
      <FileDrop
        onDrop={(file, e) => {
          console.log(file[0]);
          setSelectedFile(file[0]);
          setFile({
            src: URL.createObjectURL(file[0]),
            alt: file[0].name,
          });
          if (selectedFile != null) {
            setSelectedFile(["myFile", selectedFile, selectedFile.name]);
          }
        }}
      >
        {fileData()}
      </FileDrop>
>>>>>>> f81c02744a2fa7db7ebb6c95ef2087109f2348d2
    </div>
  );
}

export default Upload;
