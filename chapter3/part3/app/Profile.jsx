import React from 'react';
import Hobby from './Hobby';

export default class Profile extends React.Component {
    constructor(){
        super();
        this.message= 0;
        this.addClick = this.addClick.bind(this);
    }

    addClick(){
        // console.log(++ this.message);

    }
    render() {
        return (
            <div className="profile-component">
                <Hobby />
                <h1>姓名:{this.props.name}</h1>
                <h2>年龄:{this.props.age}</h2>
                <input type="text" ref="name"/>
                <button onClick={this.addClick}>点击</button>
            </div>
        )
    }
}