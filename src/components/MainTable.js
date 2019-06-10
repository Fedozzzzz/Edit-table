import React, {Component} from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../store/reducerForSaga";

class MainTable extends Component {
    constructor(props) {
        super(props);
        this.state = {date: ''};
        this.onDateChange = this.onDateChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onDateChange(event) {
        this.setState({date: event.target.value});
    }


    onSubmit(e) {
        e.preventDefault();
        let i = 0;
        this.props.users.map(user => {
            console.log(document.getElementsByName('name')[i].value);
            user.userProfile.name = document.getElementsByName('name')[i].value;
            user.userProfile.surname = document.getElementsByName('surname')[i].value;
            i++;
        });
        this.props.saveData(this.props.users);
    }

    onChange(e) {
        e.preventDefault();
        this.props.users.map(user => {
            console.log(document.getElementsByTagName("input")[0].value);
        });
    }


    render() {
        return (
            <div>
                {/*<h1>Payment</h1>*/}
                <button type="button" className="btn btn-primary"
                        onClick={this.props.initUsers}>Fetch
                </button>
                <button type="button" className="btn btn-warning"
                        onClick={this.props.editUsers}>Edit
                </button>
                <button type="button"
                        className="btn btn-success"
                        onClick={this.onSubmit}>Save
                </button>
                <table className='table table-striped'>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Account amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.users ?
                        (!this.props.isEdit ? (
                            this.props.users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.userProfile.name}</td>
                                    <td>{user.userProfile.surname}</td>
                                    <td>{user.accountAmount}</td>
                                    {/*<Row key={user.id} user={user}/>*/}
                                </tr>))) : (
                            this.props.users.map(user => (
                                <tr key={user.id}>
                                    <td>
                                        <form>
                                            <input
                                                defaultValue={user.userProfile.name}
                                                name="name"
                                            /></form>
                                    </td>
                                    <td>
                                        <form>
                                            <input
                                                defaultValue={user.userProfile.surname}
                                                name="surname"
                                            /></form>
                                    </td>
                                    <td>
                                        <form>
                                            <input
                                                defaultValue={user.accountAmount}
                                                name="accountAmount"
                                            /></form>
                                    </td>
                                </tr>))))
                        : 'loading'
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect(
    state=>state.users,
    dispatch=>bindActionCreators(actionCreators,dispatch)
)(MainTable);