import React from "react";
import { useDispatch } from "react-redux";
import { deleteBlogPost } from "../../actions/blogActions";
import { Button } from "../UI/index";

export const DeleteBlogPostItem = ({ id, date_posted, title, url }) => {
  const dispatch = useDispatch();
  return (
    <tr key={id}>
      <td>{date_posted}</td>
      <td>{title}</td>
      <td>{url}</td>
      <td>
        <Button
          onClick={() => dispatch(deleteBlogPost(id))}
          className="delete-button"
          label="X"
        />
      </td>
    </tr>
  );
};
