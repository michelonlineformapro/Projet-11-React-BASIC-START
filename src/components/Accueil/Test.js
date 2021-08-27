import React, {Component} from "react";


class Test extends Component{

    constructor(props) {
        super(props);

        //Garder le context this
        this.handleClick = this.handleClick.bind(this)
        this.input = React.createRef()
    }


    handleClick(event){
        console.log(this.input.current.value)
    }

    //Exemple refs

    render() {
        return(
            <div className="box">
                <div className="field">
                    <div className="label">Entrer en truc</div>
                    <input
                        ref={this.input}
                        className="input"
                        placeholder="Ecrire un truc"
                    />
                    <button onClick={this.handleClick} className="button is-warning">TEST REF</button>
                </div>
            </div>
        )
    }

}

export default Test