import React, { Component } from 'react';
import actions from './store/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Todos extends Component {
    addList(){
        this.props.addList('ddd');
        console.log(this.props.list)
    }
    render(){
        return(
            <div>
                <div onClick={()=> {this.props.increase(2);}}>{this.props.count}</div>
                {/*<button onClick={() => decrease()}>jian</button>*/}
                <button onClick={() => this.addList()}>添加</button>
                <button onClick={() => this.props.deleteList()}>删除</button>
                {
                    this.props.list.map((v, i) => {
                        return <p key={v + i}>{v}</p>
                    })
                }
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        count: state.count,
        list: state.list
    }
};

//https://www.imweb.io/topic/5a426d32a192c3b460fce354  mapDispatchToProps的理解
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        increase: actions.increase,
        addList: actions.addList,
        deleteList: actions.deleteList
    }, dispatch)
};
export default connect(
    mapStateToProps,
    mapDispatchToProps //mapDispatchToProps
)(Todos);
