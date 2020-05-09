import React, { Component } from 'react'
import Layout from "../components/Layout";
import Header from "../components/Header";
import Menu from "../components/Menu";
import {Route} from "react-router-dom"

import AddStudent from "./student/AddStudent"
import StudentList from "./student/StudentList"
import AddCourse from "./course/AddCourse";
import CourseList from "./course/CourseList"
import Wecomponent from './Wecomle'
export default class Main extends Component {
    render() {
        return (
            <div>
            <Layout 
                    header={Header()}
                    aside={<Menu/>}
                    >
                <Route path="/" exact component={Wecomponent}/>
                <Route path="/students" exact component={StudentList}></Route>
                <Route path="/students/add" exact component={AddStudent}></Route>
                <Route path="/courses" exact component={CourseList}></Route>
                <Route path="/courses/add" exact component={AddCourse}></Route>
            </Layout>
        </div>
        )
    }
}
