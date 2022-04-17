import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {word: ''}
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


    render() {
        return(
            <div className="search_project">
                <form onSubmit={(event)=>this.handleSubmit(event)}>
                    <input type="text" className="input_searc" name="word" value={this.state.word} placeholder="Введите название"
                        onChange={(event)=>this.handleChange(event)}/>
                    <input type="submit" className="submit_searc" value="Search" style={{'margin-left': '3px'}}/>
                </form>
                {this.state.word!== '' ? <button onClick={()=>{this.props.canceled(); this.setState({word: ''})}}>X</button>: null}
            </div>
        )
    }
}

export default Search