import React from "react";
import { Thead, Tbody, Table } from "../UI/index";
import { DeleteBlogPostItem } from "../deleteBlogPostItem";

export const DeleteBlogPostTable = ({ posts }) => {
  return (
    <Table className="table">
      <Thead>
        <tr className="delete-table-head">
          <th>Date</th>
          <th>Title</th>
          <th>URL</th>
          <th>Delete</th>
        </tr>
      </Thead>
      <Tbody className="delete-table-body">
        {posts.map(post => (
          <DeleteBlogPostItem {...post} />
        ))}
      </Tbody>
    </Table>
  );
};
