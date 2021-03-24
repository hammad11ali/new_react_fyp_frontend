import React, { Component } from "react";
import axios from "axios";
class Create extends Component {
  state = {
    name: "",
    concept_name: "",
    action_verb: "",
    description: "",
    file: null,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let htmlFormData = new FormData();
    htmlFormData.append("name", this.state.name);
    htmlFormData.append("concept_name", this.state.concept_name);
    htmlFormData.append("file", this.state.file);
    htmlFormData.append("action_verb", this.state.action_verb);
    htmlFormData.append("description", this.state.description);
    let url = "http://127.0.0.1:8000/quiz/lo/";
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios.post(url, htmlFormData, config).then((res) => {
      this.setState({
        name: "",
        concept_name: "",
        action_verb: "",
        description: "",
        file: null,
      });
    });
  };
  render() {
    return (
      <div>
        <h2>Add Learning Objective</h2>
        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="lo_name">Name/Level: </label>
            <input
              type="text"
              className="htmlForm-control"
              id="lo_name"
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
              placeholder="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lo_description">Description: </label>
            <input
              type="text"
              className="htmlForm-control"
              id="lo_description"
              value={this.state.description}
              onChange={(e) => {
                this.setState({ description: e.target.value });
              }}
              placeholder="Description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lo_concept_name">Concept Name: </label>
            <input
              type="text"
              className="htmlForm-control"
              id="lo_concept_name"
              onChange={(e) => {
                this.setState({ concept_name: e.target.value });
              }}
              placeholder="concept name"
              value={this.state.concept_name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lo_action_verb">Action Verb: </label>
            <input
              type="text"
              className="htmlForm-control"
              id="lo_action_verb"
              onChange={(e) => {
                this.setState({ action_verb: e.target.value });
              }}
              placeholder="action verb"
              value={this.state.action_verb}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lo_file">Generator File: </label>
            <input
              type="file"
              className="htmlForm-control"
              id="lo_file"
              onChange={(e) => {
                this.setState({ file: e.target.files[0] });
              }}
              placeholder="no file"
            />
          </div>

          <center>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </center>
        </form>
      </div>
    );
  }
}

export default Create;
