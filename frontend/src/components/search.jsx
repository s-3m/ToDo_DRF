import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import {SearchOutlined, StopOutlined} from "@ant-design/icons";



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
                    <Form.Item wrapperCol={{ offset: 10, span: 10 }}>
                        <Button type="primary" htmlType="submit" shape="circle" icon={<SearchOutlined />}>
                        </Button>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: -10, span: 0 }}>
                        {this.state.word!== '' && <Button type="primary" danger shape="circle" icon={<StopOutlined />} style={{marginLeft: '2px'}}
                                                  onClick={()=>{this.props.canceled();
                                                  this.setState({word: ''})}}>
                                                </Button>}
                    </Form.Item>
                </Form>


            </div>
        )
    }
}

export default Search