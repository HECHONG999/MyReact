import React ,{useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {getStundetByPage} from "../../services/getAllStudent";
 
/**
 * 学生列表组件,纯组件没有状态,从属性获取数据展示
 */
export default function StudentList() {
    let [list, setList] = useState([])
    useEffect(() => {
      ( async function () {
        let resp = await getStundetByPage()
        setList(resp)
      })() 
    }, [])

    let stus = list.map( it => {
        return  <li key={it.id}>姓名: {it.name}</li>
    })

    return (
        
        <ul>
           {stus}
        </ul>
    )
}


