import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchImages } from "../../actions/imageActions";
import AdminModal from "../adminmodal";
import { DeleteImageItem } from "../deleteImageItem";

class DeleteImageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageId: null,
      imageUrl: null,
      showModal: false
    };
  }

  componentDidMount() {
    // Get images if we don't have them
    if (!this.props.images.length) {
      this.props.dispatch(fetchImages());
    }
  }

  render() {
    const { images } = this.props;
    return (
      <>
        <h2>Delete an Image: </h2>
        <div className="delete-img-2">
          <div className="portfolio-items row">
            {images !== undefined && images.length ? (
              images.map(image => <DeleteImageItem {...image} />)
            ) : (
              <p>You have no images posted.</p>
            )}
          </div>
          <br />
        </div>
        <AdminModal
          image={this.state.imageUrl}
          animation={false}
          show={this.state.showModal}
          onHide={() => this.setState({ showModal: !this.state.showModal })}
          id={this.state.imageId}
        />
      </>
    );
  }
}
const mapStateToProps = state => ({
  images: state.images.images
});

export default connect(mapStateToProps)(DeleteImageContainer);
