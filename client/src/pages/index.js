import React, { Component } from 'react';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export default class Index extends Component {
    state = {
        meals: [],
        toDashboard: false,
        isLoading: false,
        total: 0,
        errorDelete: false,
        successDelete: false,
    };

    constructor(props) {
        super(props);
        this.url = 'http://localhost:8009/v1/meal';
        this.token = localStorage.getItem('token');
    }

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = this.token;
        axios.get(this.url)
            .then(response => {
                const meals = response.data.data;
                const total = response.data.total;
                this.setState({ meals });
                this.setState({ total });
            })
            .catch(error => {
                this.setState({ toDashboard: true });
                console.log(error);
            });
    }

    handleClickDelete = event => {
        axios.defaults.headers.common['Authorization'] = this.token;
        axios.delete(this.url + '/' + event.target.value)
            .then(response => {
                this.componentDidMount();
                this.setState({successDelete: true });
                this.setState({successDelete: false });
                this.setState({ isLoading: true });
            
            })
            .catch(error => {
                console.log(error.toString());
                this.setState({errorDelete: true });
                this.setState({errorDelete: false });
                setTimeout(() => {
                    this.setState({ toDashboard: true });
                }, 1000);
            });
    };

    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to='/' />
        }
        const successNotificationDelete = this.state.successDelete;
        const errorNotificationDelete = this.state.errorDelete;
        return (
            <div>
                <Header />
                <div id="wrapper">
                    <Sidebar />
                    {errorNotificationDelete ? NotificationManager.error('Error', 'Could not delete', 1) : ""}
                    {successNotificationDelete ? NotificationManager.success('Success', 'Meal deleted successfully', 1) : ""}
                    <NotificationContainer />
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to={'/index'} >Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">CRUD App</li>
                                <li className="ml-auto"><Link to={'add'}>Add Calorie For Today</Link></li>
                            </ol>
                            <div className="card mb-3">
                                <div className="card-header"><i className="fas fa-table"></i>
                                    &nbsp;&nbsp;Calorie List
                                </div>
                                {
                                    this.state.total <= 2000 ? <div className="card-header safe-card">
                                        &nbsp;&nbsp;Your Calorie Count is Safe :{this.state.total}
                                    </div> : <div className="card-header warning-card">
                                        &nbsp;&nbsp;Your Calorie Count is Greater than limit :{this.state.total}
                                    </div>
                                }
                                <div className="card-body">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Text</th>
                                                <th>Calorie</th>
                                                <th>Date</th>
                                                <th className="text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.meals.map((meals, index) =>
                                                <tr key={meals._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{meals.text}</td>
                                                    <td>{meals.calorie}</td>
                                                    <td>{meals.createdDate}</td>
                                                    <td className="text-center">
                                                        <Link className="btn btn-sm btn-info" to={{ pathname: 'edit', search: '?id=' + meals._id }}>Edit</Link>
                                                        &nbsp; | &nbsp;
                                                        <button value={meals._id} className="btn btn-sm btn-danger" disabled={index === 0 ? true : false} onClick={this.handleClickDelete} >Delete</button>
                                                    </td>
                                                </tr>)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <footer className="sticky-footer">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright © Your Website 2019</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}
