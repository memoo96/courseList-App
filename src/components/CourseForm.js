import React, { Component } from 'react';

class CourseForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.addCourse}>
          <input type="text" value={this.props.current} onChange={this.props.updateCourse} required />
          <button type="submit">Add Course</button>
      </form>
    );
  }
}

export default CourseForm;
