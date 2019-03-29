import React from 'react'

function childenWithProps(children, props) {
    return React.Children.map(props.children, //perpetuar as propriedads para os compoenntes filhso
        child => React.cloneElement(child, {...props}));
}

export { childenWithProps }