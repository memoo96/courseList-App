import React, { Component } from 'react';
import './App.css';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';


class App extends Component {

  state = {
    courses: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Javascript" },
    ],
    current: ''
  }


  // updateCourse
  updateCourse = (e) => {
    this.setState({
      current: e.target.value
    })
  }

  // addCourse
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
      courses.push({ name: current });
      this.setState({
        courses: courses,
        current: '',
      })
  }

  // deleteCourse
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses: courses
    })
  }

  // editCourse
  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses: courses
    })
  }
  
  render() {

    const courseList = this.state.courses.map((course, index) => {
      return <CourseList courses={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
    })

    return (
      <section className="App">
        <h2>Add Courses</h2>
        <CourseForm current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse} />
        <ul>
          { this.state.courses.length  > 0 ? courseList : <p>There is no courses to show !!!</p> }
        </ul>
      </section>
    );
  }
}

export default App;
