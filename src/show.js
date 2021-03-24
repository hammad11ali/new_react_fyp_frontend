import React, { Component } from "react";
import axios from "axios";
class Show extends Component {
  state = {
    los: [],
    current: -1,
    n: 0,
    questions: [],
  };
  componentDidMount = () => {
    let url = "http://127.0.0.1:8000/quiz/lo/";
    axios.get(url).then((res) => {
      console.log(res.data.Content);
      this.setState({
        los: res.data.Content,
      });
    });
  };
  generate = () => {
    if (this.state.n != 0 && this.state.current != -1) {
      let url =
        "http://127.0.0.1:8000/quiz/quiz/?id=" +
        this.state.current +
        "&n=" +
        this.state.n;
      axios.get(url).then((res) => {
        console.log(res.data.Content);
        this.setState({
          questions: res.data.Content,
        });
      });
    }
  };
  render() {
    return (
      <div>
        <h2>Generate Questions</h2>
        <div class="form-group">
          <label htmlFor="select">Select Learning Objecive</label>
          <select
            class="form-control"
            id="select"
            onChange={(e) => {
              this.setState({ current: e.target.value });
            }}
            value={this.state.current}
          >
            <option disabled value={-1}>
              Choose An Option
            </option>
            {this.state.los.map((lo, key) => {
              return (
                <option key={key} value={lo.id}>
                  {lo.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="lo_name">Name/Level: </label>
          <br></br>
          <input
            type="number"
            className="form-control"
            id="lo_name"
            value={this.state.n}
            onChange={(e) => {
              this.setState({ n: e.target.value });
            }}
            placeholder="Number of Questions"
          />
        </div>
        <center>
          <button onClick={this.generate} className="btn btn-primary">
            Generate Questions
          </button>
        </center>
        <br />
        <br />
        <h2>Generated Questions:</h2>
        {this.state.questions.map((obj, key) => {
          return (
            <div key={key}>
              <p>{obj.statement}</p>
              {obj.options.map((op, k) => {
                return <p key={k}>{op}</p>;
              })}
              <p>Correct Option: {obj.correct_index}</p>
              <p>Detail: {obj.detail}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Show;
