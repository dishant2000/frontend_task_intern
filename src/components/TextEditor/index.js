import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = () => {
  const [show, setShow] = useState(`<h1>Hello World</h1>
  <div>Some initial text !</div>`);

  return (
    <>
      <ReactQuill
        className="shadow-sm"
        theme="snow"
        style={{
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          borderRadius: "3px",
          height: "150px",
        }}
        value={show}
        modules={{
          toolbar: [
            [{ size: [] }],
            ["bold", "italic", "underline"],
            [{ align: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link"],
            ["clean"],
          ],
        }}
        formats={[
          "header",
          "font",
          "size",
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "color",
          "background",
          "list",
          "bullet",
          "indent",
          "link",
          "video",
          "image",
          "code-block",
          "align",
        ]}
        onChange={(val) => {
          setShow(val);
        }}
      />
    </>
  );
};

export default TextEditor;
