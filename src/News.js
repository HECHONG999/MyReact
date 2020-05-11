import React from 'react';
import {Link, Route} from "react-router-dom"
import NewsDetail from "./NewsDetail";
import NewsHome from "./NewsHome";
import NewsSearch from "./NewsSearch"
export default function News(props) {
    return (
        <div>
            <div>
                <Link to="/news/">首页</Link>
                <Link to="/news/dl">新闻详情页</Link>
                <Link to="/news/ser">新闻搜索页</Link>
            </div>
            <div>
                {props.children}
            </div>
            
        </div>
    )
}
