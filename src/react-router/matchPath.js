import {pathToRegexp}  from "path-to-regexp";

/**
 * 得到匹配结果 （match对象）， 没有匹配返回null
 * @param {*} path 
 * @param {*} options 相关配置，该配置是一个对象，该对象中，可以出现：exact、sensitive、strict
 */
export default function matchPath(path,pathname, options) {
    let keys = [];
    const regExp = pathToRegexp(path, keys, getOptions(options));
    const result = regExp.exec(pathname);
    console.log(result)
    if(!result) {
        return null;
    }

    // 如果匹配
    let groups = Array.from(result);
    groups = groups.splice(1);      // 得到匹配的分组结果
    let params = getParams(groups, keys);
    return {
        isExact: pathname === result[0],
        params,
        path,
        url: result[0]
    }
}

/**
 * 根据匹配的分组结果， 得到一个params 对象
 * @param {*} groups 
 * @param {*} keys 
 * @returns 
 */
function getParams(groups, keys) {
    let obj = {};
    for(let i = 0; i < groups.length; i ++) {
        let value = groups[i];
        let name = keys[i].name;
        obj[name] = value
    }
    return obj;
}

/**
 * 将react-router的配置，转为 path-to-regexp的配置
 * @param {*} options 
 * @returns 
 */
function getOptions(options={}) {
    let defaultOptions = {
        exact: false,
        sensitive: false,
        strict: false
    }
    let opts = {...defaultOptions, ...options}
    return {
        sensitive: opts.sensitive,
        exact: opts.exact,
        strict: opts.strict
    }
}

console.log(matchPath("/news/:name/:age?", {}))