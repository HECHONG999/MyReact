const appkey = "demo13_1545210570249"

export async function getAllStudent() {
    return await fetch("http://open.duyiedu.com/api/student/findAll?appkey=" + appkey + "").then(resp => {
        return resp.json()
    }).then(resp => {
        return resp.data
    });
}


export async function getStudentByPage(page, limit) {
    return await fetch("http://open.duyiedu.com/api/student/findByPage?appkey="+ appkey +"&page="+ page +"&size="+limit )
    .then( resp => resp.json())
    .then( resp => {
        return resp.data
    })
}