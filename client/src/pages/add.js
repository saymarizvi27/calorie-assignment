import React, {Component} from 'react';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import {Link, Redirect} from "react-router-dom";
import axios from 'axios';

export default class AddPage extends Component {

    state = {
        redirect: false,
        toDashboard: false,
        isLoading: false
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({isLoading: true});
    
        const url = 'http://localhost:8009/v1/meal';
        const calorie = document.getElementById('inputCalorie').value;
        const text = document.getElementById('inputMeal').value;
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
        let bodyFormData = new FormData();
        bodyFormData.set('calorie', calorie);
        bodyFormData.set('text', text);
        axios.post(url, bodyFormData)
            .then(result => {
                if (result.data) {
                    this.setState({redirect: true, isLoading: false})
                }
            })
            .catch(error => {
                this.setState({ toDashboard: true ,isLoading: false});
                console.log(error);
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
        return (
            <div>
                <Header/>
                <div id="wrapper">
                <Sidebar></Sidebar>
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to={'/index'} >Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">Add</li>
                            </ol>
                        </div>
                        <div className="container-fluid">
                            <div className="card mx-auto">
                                <div className="card-header">Add Meal and Calorie Details</div>
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <input type="text" id="inputMeal" className="form-control" placeholder="Enter Meal" required="required" autoFocus="autofocus" />
                                                        <label htmlFor="inputMeal">Enter Meal</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <input type="number" id="inputCalorie" className="form-control" placeholder="Enter Calorie" required="required"/>
                                                        <label htmlFor="inputCalorie">Enter Calorie</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Add Daily Meal &nbsp;&nbsp;&nbsp;
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
                                    <span>Copyright © Your Website <div>{(new Date().getFullYear())}</div></span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}
