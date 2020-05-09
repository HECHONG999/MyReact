import React, { Component } from 'react'
import StudentSearchBar from "../../components/StudentSearchBar";
import StudentTable from "../../components/StudentTable"
// 发送ajax请求
import {searchStudents} from "../../services/getAllStudent";
import qs from "query-string"

import Pager from "../../components/Pager"
/**
 * 解析URL地址的location.search参数
 * @param {*} search 
 */
function getQuery(search) {
    const queryDefault = {
        page: 1,
        sex: -1,
        limit: 10,
        key: ""
    }
    let query = qs.parse(search);
    query = Object.assign({}, queryDefault, query);
    return query;
}

function upDateLocation(newQuery, history) {
    const search = qs.stringify(newQuery);
    // 通过history.push来更改url的search参数
    history.push("?"+ search)
}


async function getStudent(self, querys) {
    const key = querys.key;
    const sex = querys.sex;
    const page = querys.page;
    const limit = querys.limit
    const resp = await searchStudents({page: page, limit: limit, sex: sex, key: key}); 

    const query = getQuery(self.props.location.search)
    self.setState({
        stus: resp.datas,
        query: query,
        cont: resp.cont
    })
}

export default class StudentList extends Component {
    state = {
        cont: "",
        stus: [],
        query: {key: "", sex: -1, page: 1, limit: 10}
    }
    // Dom挂载完成后,首次发送ajax,请求数据
    async componentDidMount() {
        getStudent(this, this.state.query)
    }

    render() {
        return (
            <div>
                <StudentSearchBar 
                    defaultValue={{ key: this.state.query.key, sex: this.state.query.sex}} 
                    onSearch={ (result) => {
                       const newQuery = {
                            ...this.state.query,
                            key: result.key,
                            sex: result.sex,
                       }
                        getStudent(this ,newQuery)
                        // 1、改变url地址参数
                        upDateLocation(newQuery, this.props.history)
                }}/>
             
                <StudentTable stus={this.state.stus}/>
                <Pager 
                    current={this.state.query.page}
                    total={this.state.cont}
                    limit={this.state.query.limit}
                    panelNumber={5}
                    onPageChange={newPage => {
                        const newQuery = {
                            ...this.state.query,
                            page: newPage
                        }
                        getStudent(this ,newQuery)
                        upDateLocation(newQuery, this.props.history);
                    }}
                />
            </div>
        )
    }
}
