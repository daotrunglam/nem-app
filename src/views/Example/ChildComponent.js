import React from "react";

class ChildComponent extends React.Component {
  render() {
    console.log(">>> check props: ", this.props);
    let { arrJobs } = this.props;
    return (
      <>
        <div className="job-lists">
          {arrJobs.map((item, index) => {
            return (
              <div key={item.id}>
                {item.title} - {item.salary}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default ChildComponent;
