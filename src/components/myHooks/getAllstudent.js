/* eslint "react-hooks/exhaustive-deps": "off" */

import {useState, useEffect} from 'react';
import {getAllStudent} from "../../services/getAllStudent"

export default function useAllstudents() {
    const [student, setStudent] = useState([])
    useEffect( () => {
        ( async  () => {
            const resp = await getAllStudent();
            console.log(resp, "+++++++9999")
            setStudent(resp)
        })();
    },[])
    return student;
}
