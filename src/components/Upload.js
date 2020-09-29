import React, { useState } from "react";
import { TextInput, Row, Col } from "react-materialize";

const Upload = ({ setFileInfo }) => {
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFileInfo(selected);
      setError("");
    } else {
      setFileInfo(null);
      setError("Please select an image file (png or jpeg)");
    }
  };

  return (
    <div>
      <Row>
        <Col s={12}>
          <TextInput
            s={12}
            label="Upload Image"
            type="file"
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col s={12}>{error && <div>{error}</div>}</Col>
      </Row>
    </div>
  );
};

export default Upload;
