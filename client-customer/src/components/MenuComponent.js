import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import withRouter from '../utils/withRouter';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            txtKeyword: ''
        };
    }

    render() {
            const cates = this.state.categories.map((item) => {
                return ( <
                    li key = { item._id }
                    className = "menu" > < Link to = { '/product/category/' + item._id } > { item.name } < /Link></li >
                );
            });
            return ( <
                div className = "border-bottom bg-gray-400 rounded-lg" >
                <
                div className = "float-left font-bold aglin-center items-center py-2 ml-3" >
                <
                ul className = "menu" >
                <
                li className = "menu" > < Link to = '/' > Home < /Link></li > { cates } <
                /ul> < /
                div >
                <
                div style = {
                    { display: "inline" }
                }
                class = "form-switch" >
                <
                input class = "form-check-input"
                type = "checkbox"
                onChange = {
                    (e) => this.ckbChangeMode(e)
                }
                />&nbsp;   < /
                div > <
                div className = "float-right font-bold " >
                <
                form className = "search" >
                <
                input type = "search"
                placeholder = "Look For Product"
                className = "keyword-input px-4 py-2 rounded-lg text-gray-500"
                value = { this.state.txtKeyword }
                onChange = {
                    (e) => { this.setState({ txtKeyword: e.target.value }) }
                }
                /> <
                button type = "submit"
                className = "search-button bg-gray-50 py-2 px-4 border-gray-500 rounded-lg text-gray-500 border-solid border-2 ml-5 mr-3"
                onClick = {
                    (e) => this.btnSearchClick(e)
                } >
                SEARCH <
                /button> < /
                form > <
                /div> <
                div className = "float-clear" / >
                <
                /div>
            );
        }
        // event-handlers
    ckbChangeMode(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'light');
        }
    }

    componentDidMount() {
        this.apiGetCategories();
    }

    // event-handlers
    btnSearchClick(e) {
        e.preventDefault();
        this.props.navigate('/product/search/' + this.state.txtKeyword);
    }

    // APIs
    apiGetCategories() {
        axios.get('/api/customer/categories').then((res) => {
            const result = res.data;
            this.setState({ categories: result });
        });
    }

    // event-handlers
    ckbChangeMode(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'light');
        }
    }
}

export default withRouter(Menu);