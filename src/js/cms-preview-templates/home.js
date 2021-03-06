import React from "react";
import format from "date-fns/format";


export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;

    return <article className="cms content">
      <h1>{ entry.getIn(["data", "title"])}</h1>
      <h2>{ entry.getIn(["data", "subtitle"])}</h2>
        { widgetFor("body") }
    </article>;
  }
}
