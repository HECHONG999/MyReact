import React, { Component } from 'react'
import Form from "./index.js"

export default class Test extends Component {
    render() {
        console.log(Form.Button)
        return (
            <div>
                <Form
                    onSubmit={ (dates) => {
                        console.log(dates)
                    }} 
                >
                    <div>
                        账号: <Form.input  name="loginId"></Form.input>
                    </div>
                   
                    <div>
                            <Form.Button>提交</Form.Button>
                    </div>
                    
                </Form>
            </div>
        )
    }
}
