import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeValue} from "./fieldActions";

class Field extends Component {
    render() {
        return (
            <div>
                <label>{this.props.value}</label><br />
                <input onChange={this.props.changeValue} value={this.props.value} />
            </div>
        )
    }
}

function mapStateToProps(state) { //estado para as propriedades
    return {
        value: state.field.value
    }
}

function mapDispatchToProps(dispatch) { //métodos de acoes para as propriedades
    return bindActionCreators({ changeValue}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Field)//decorator