import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {word: "введите название проекта"}
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit(event, canceled) {
        this.props.goSearch(this.state.word)
        event.preventDefault()
    }

    // canceled(){
    //     this.props.canceled()
    // }

    render() {
        return(
            <div className="search_project">
                <form onSubmit={(event)=>this.handleSubmit(event)}>
                    <input type="text" className="input_searc" name="word" value={this.state.word} onClick={()=>this.setState({word: ''})}
                        onChange={(event)=>this.handleChange(event)}/>
                    <input type="submit" className="submit_searc" value="Search" style={{'margin-left': '3px'}}/>
                </form>
                <button onClick={()=>this.props.canceled()}>X</button>
            </div>
        )
    }
}

export default Search