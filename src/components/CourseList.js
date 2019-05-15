import React, { Component, Fragment } from 'react';

class CourseList extends Component {


    state = {
        isEdit: false
    }

    // renderCourseList
    renderCourseList = () => {
        return (
            <li>
                <span>{this.props.courses.name}</span>
                <button onClick={() => { this.toggleState() }}>Edit Course</button>
                <button onClick={() => { this.props.deleteCourse(this.props.index) }}>Delete Course</button>
            </li>
        );
    }

    toggleState = () => {
        let isEdit = this.state.isEdit;
        this.setState({
            isEdit: !isEdit
        })
    }

    // renderUpdateForm
    renderUpdateForm = () => {
        return (
            <form onSubmit={this.updateCourseItem}>
                <input type="text" ref={(v) => { this.input = v }} defaultValue={this.props.courses.name} />
                <button>Update Course</button>
            </form>
        );
    }

    // updateCourseItem
    updateCourseItem = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index, this.input.value);
        this.toggleState();
    }

    render() {
        let isEdit = this.state.isEdit;
        return (
            <Fragment>
                {isEdit ? this.renderUpdateForm() : this.renderCourseList()}
            </Fragment>
        );
    }
}

export default CourseList;
