// import React,{Component} from "react";

// export class ListComp extends Component{
//     render(){
//         const {data}=this.props
//         return(
//             <>
//             <span>{data}</span>
//             </>
//         )
//     }
// }

// export default ListComp

import React,{Component} from "react";

export class ListComp extends Component{
    render(){
        
        return(
            <>
            <span>Count {this.props.count}</span>
            </>
        )
    }
}

export default ListComp