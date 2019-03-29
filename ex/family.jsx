import React from 'react'
import { childenWithProps} from "../uteis/reactUtils";

export default props => (
    <div>
        <h1>Familia</h1>
        { childenWithProps(props.children, props) }
    </div>
)

/* funciona assim tb!
//perpetuar as propriedads para os compoenntes filhso
<div>
        <h1>Familia</h1>
        {  React.Children.map(props.children, //perpetuar as propriedads para os compoenntes filhso
            child => React.cloneElement(child, {...props}  ))}
        *
</div>
*/
