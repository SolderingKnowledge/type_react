import React, {Component}  from "react";
import Innerface from ".././interfaces/Detail"

export default class Detail extends Component <Innerface> {//passing as props
// class Detail extends Component<{ name:string, quantity: number }>{
    render(){
        const {name, quantity } = this.props
        return(
            <div>
                <p>{name}</p>
                <p>{quantity}</p>
            </div>
        )
    }
}

// export default Detail;