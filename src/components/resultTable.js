import React from 'react';
import { Table } from 'reactstrap';
import data from '../data/data.json';
import Linkify from 'react-linkify';

const resultTable = (props) => {
  return (
    <div className="p-3">
    <Table striped responsive bordered>
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Chapters</th>
        <th>Status</th>
        <th>Rating</th>
        <th>Word Count</th>
        <th>Tags</th>
        <th>Link</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
    {data.map(fics => {
            return (
              <tr>
                <td>{fics.Title}</td>
                <td>{fics.Author}</td>
                <td>{fics.Chapters}</td>
                <td>{fics.Status}</td>
                <td>{fics.Rating}</td>
                <td>{fics['Word Count']}</td>
                <td>{fics.Tags.TW}</td>
            <td><Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
        <a target="blank" href={decoratedHref} key={key}>
            {decoratedText}
        </a>
    )}>{fics.Link}</Linkify></td>
                <td>{fics.Notes}</td>
                </tr>
            );
          })}
    </tbody>
  </Table>
  </div>
  )
}

export default resultTable;