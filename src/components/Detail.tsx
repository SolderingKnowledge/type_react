import React, {Component}  from "react";

class Detail extends Component<{ name:string, quantity: number }>{//passing as props
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

export default Detail;