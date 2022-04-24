import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import {SearchOutlined} from "@ant-design/icons";



class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {word: ''}
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
        console.log(this.state)
        // this.props.goSearch(this.state.word)

    }

    handleSubmit(event, canceled) {
        this.props.goSearch(this.state.word)
        // let a = document.getElementsByName('word')
        // a[0].value = ''
        event.preventDefault()
    }


    render() {
        return(
            <div className="search_project">
                <Form
                  name="basic"
                  layout="inline"
                  initialValues={{ remember: true }}
                  onFinish={()=>this.handleSubmit()}
                  onFinishFailed={null}
                  autoComplete="off"
                  style={{paddingTop: '10px', paddingBottom:'10px'}}
                >
                    <Form.Item
                        name="SearchProj"
                        rules={[{ message: 'Please input project name' }]}
                    >
                        <Input type="text" name="word" placeholder="Please input project name" value={this.state.word} onChange={(event)=>this.handleChange(event)} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 0, span: 10 }}>
                        <Button type="primary" htmlType="submit" shape="round" icon={<SearchOutlined />}>
                        </Button>
                    </Form.Item>
                </Form>

                {/*<form onSubmit={(event)=>this.handleSubmit(event)}>*/}
                {/*    <input type="text" className="input_searc" name="word" value={this.state.word} placeholder="Введите название"*/}
                {/*        onChange={(event)=>this.handleChange(event)}/>*/}
                {/*    <input type="submit" className="submit_searc" value="Search" style={{'margin-left': '3px'}}/>*/}
                {/*</form>*/}
                {this.state.word!== '' && <button onClick={()=>{this.props.canceled(); this.setState({word: ''})}}>X</button>}
            </div>
        )
    }
}

export default Search