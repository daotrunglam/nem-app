import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "abcJob1", title: "Developers", salary: "500" },
      { id: "abcJob1", title: "Testers", salary: "400" },
      { id: "abcJob3", title: "Project Managers", salary: "1000" },
    ],
  };
  addNewJob = (job) => {
    // let currentJobs = this.state.arrJobs;
    //   currentJobs.push(job)
    this.setState({ 
      arrJobs: [...this.state.arrJobs,job]
      // arrJobs: currentJobs,
    })
  }
  render() {
    console.log(">>> call render: ", this.state);
    return (
      <>
        <AddComponent
        addNewJob = {this.addNewJob}
        />
        <ChildComponent arrJobs={this.state.arrJobs} />
      </>
    );
  }
}

export default MyComponent;
