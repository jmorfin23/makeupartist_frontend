import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, MyInput, Button } from "../UI/index";
import { addBlogPost } from "../../actions/blogActions";

class AddBlogPostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      blogTitle: "",
      blogDate: ""
    };
  }

  addBlogPost = async e => {
    e.preventDefault();

    const { blogTitle: title, blogDate: date, text, image } = this.state;

    const formData = new FormData();

    formData.append("title", title);
    formData.append("date", date);
    formData.append("text", text);
    formData.append("image", image);

    this.props.dispatch(addBlogPost(formData));
  };

  render() {
    return (
      <Form onSubmit={e => this.addBlogPost(e)}>
        <div className="form-group">
          <MyInput
            id="blogTitle"
            onChange={e => this.setState({ blogTitle: e.target.value })}
            name="title"
            type="text"
            className="form-control"
            required="required"
            placeholder="Title"
            value={this.state.blogTitle}
            label={<label>Title</label>}
          />
        </div>
        <div className="form-group">
          <MyInput
            onChange={e => this.setState({ blogDate: e.target.value })}
            name="date"
            type="text"
            className="form-control"
            required="required"
            placeholder="dd mmm yyyy"
            value={this.state.blogDate}
            input={<label>Date</label>}
          />
        </div>
        <div className="form-group">
          <MyInput
            id="blogImage"
            onChange={e => this.setState({ image: e.target.files[0] })}
            name="image"
            type="file"
            className="form-control"
            label={<label htmlFor="file-input">Image</label>}
          />
        </div>
        <div className="form-group">
          <label>Text</label>
          <textarea
            id="blogText"
            onChange={e => this.setState({ text: e.target.value })}
            cols="50"
            rows="20"
            type="text"
            name="text"
            className="form-control"
            required="required"
            placeholder="Text"
            value={this.state.text}
          />
        </div>
        <Button type="submit" className="btn btn-primary" label="Submit" />
      </Form>
    );
  }
}

export default connect()(AddBlogPostForm);
