import React, { Component } from "react";
import { connect } from "react-redux";
import { UploadImageForm } from "../uploadImageForm";
import { UploadImageSelectionList } from "../uploadImageSelectionList";
import { addImage } from "../../actions/imageActions";

class UploadImageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      uploadType: null
    };
  }

  uploadImage = async e => {
    e.preventDefault();
    const { uploadType: type, image } = this.state;

    if (!type || !image) return false;

    const formData = new FormData();

    formData.append("file", image);
    formData.append("upload_type", type);

    this.props.dispatch(addImage(formData));
  };

  render() {
    return (
      <>
        <h2>Upload an Image</h2>
        {this.state.uploadType ? null : <p>Please select a type.</p>}
        <UploadImageSelectionList
          setWedding={() => this.setState({ uploadType: "Wedding" })}
          setHairStyle={() => this.setState({ uploadType: "HairStyle" })}
          setCommercial={() => this.setState({ uploadType: "Commercial" })}
          setStudio={() => this.setState({ uploadType: "Studio" })}
        />
        <h3>
          {this.state.uploadType
            ? "Add image to: " + this.state.uploadType
            : "Type has not been selected."}
        </h3>
        <div className="input-container">
          <UploadImageForm
            onSubmit={e => this.uploadImage(e)}
            onChange={e => this.setState({ image: e.target.files[0] })}
          />
        </div>
      </>
    );
  }
}
export default connect()(UploadImageContainer);
