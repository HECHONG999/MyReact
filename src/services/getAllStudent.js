const appkey = "demo13_1545210570249"

export async function getAllStudent() {
    return await fetch("http://open.duyiedu.com/api/student/findAll?appkey=" + appkey + "").then(resp => {
        return resp.json()
    }).then(resp => {
        return resp.data
    });
}


export async function getStudentByPage(page, limit) {
    return await fetch("http://open.duyiedu.com/api/student/findByPage?appkey=" + appkey + "&page=" + page + "&size=" + limit)
        .then(resp => resp.json())
        .then(resp => {
            return resp.data
        })
}

/**
 * 按关键字查询学生,当key有值时按关键字查询, 没有，则查询所有的学生
 * @param {*} param
 */
export async function searchStudents({ page = 1, limit = 10, key = "", sex = -1 }) {
    console.log(page)
    // key有值
    if (key) {
        const resp = await fetch("http://open.duyiedu.com/api/student/searchStudent?appkey=" + appkey + "&page=" + page + "&size=" + limit + "&search=" + key + "&sex=" + sex)
            .then(resp => resp.json())
            .then(resp => {
                return resp.data
            })
        resp.datas = resp.searchList;
        delete resp.searchList
        return resp;
    } else {
        const resp = await getStudentByPage(page, limit);
        // 由于请求地址不同,用datas属性来保存findByPage字段的数据
        resp.datas = resp.findByPage;
        delete resp.findByPage;
        return resp;
    }
}