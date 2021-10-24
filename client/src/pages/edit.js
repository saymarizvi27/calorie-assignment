import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export default class EditPage extends Component {

    constructor(props) {
        super(props);
        this.url = 'http://localhost:8009/v1/meal';
        this.token = localStorage.getItem('token');
    }

    state = {
        id: '',
        redirect: false,
        isLoading: false,
        error: false,
        success: false,
    };

    componentDidMount() {
        let browser_url = new URL(window.location.href);
        let search_params = browser_url.searchParams;
        const id = search_params.get('id');
        this.setState({ id: id });
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
        axios.get(this.url + '/' + id)
            .then(response => {
                const meal = response.data.data;
                this.setState({ id: meal._id });
                document.getElementById('inputMeal').value = meal.text;
                document.getElementById('inputCalorie').value = meal.calorie;
            })
            .catch(error => {
                this.setState({ error: true });
                this.setState({ error: false });
                setTimeout(() => {
                    this.setState({ toDashboard: true });
                }, 1000);
            });

    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ isLoading: true });
        const token = localStorage.getItem('token');
        const url = 'http://localhost:8009/v1/meal/' + this.state.id;
        const calorie = document.getElementById('inputCalorie').value;
        const text = document.getElementById('inputMeal').value;
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
        axios.put(url, { calorie: calorie, text: text })
            .then(result => {
                if (result.data) {
                    this.setState({ isLoading: false, success: true });
                    this.setState({ success: false });
                    setTimeout(() => {
                        this.setState({ redirect: true });
                    }, 1000);
                }
            })
            .catch(error => {
                this.setState({ error: true });
                this.setState({ error: false });
                setTimeout(() => {
                    this.setState({ toDashboard: true });
                }, 1000);
            });
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/index' />
        }
    };

    render() {
        const isLoading = this.state.isLoading;
        if (this.state.toDashboard === true) {
            return <Redirect to='/index' />
        }
        const successNotification = this.state.success;
        const errorNotification = this.state.error;
        return (
            <div>
                <Header />
                <div id="wrapper">
                    <Sidebar></Sidebar>
                    {errorNotification === true? NotificationManager.error('Error', 'Error in editing', 1) : ""}
                    {successNotification === true? NotificationManager.success('Success', 'Meal updated sucessfully', 1) : ""}
                    <NotificationContainer />
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to={'/index'} >Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">Edit</li>
                            </ol>
                        </div>
                        <div className="container-fluid">
                            <div className="card mx-auto">
                                <div className="card-header">Meal Edit</div>
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <input type="text" id="inputMeal" className="form-control" placeholder="Enter meal" required="required" autoFocus="autofocus" />
                                                        <label htmlFor="inputMeal">Enter meal</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <input type="number" id="inputCalorie" className="form-control" placeholder="Enter Calorie" required="required" />
                                                        <label htmlFor="inputCalorie">Enter Calorie</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Update Meal &nbsp;&nbsp;&nbsp;
                                            {isLoading ? (
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            ) : (
                                                <span></span>
                                            )}
                                        </button>
                                    </form>
                                    {this.renderRedirect()}
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
