import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Language extends React.Component {
    render() {
        return <b className="lanStyle" style={{right: this.props.margin_right}}>{this.props.language}</b>
    }
}

class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Almaty'};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return <select className="cityStyle" value={this.state.value} onChange={this.handleChange}>
            <option value="Almaty">Almaty</option>
            <option value="Astana">Astana</option>
        </select>
    }
}

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ' '};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        let option_class = "option";
        let checkbox_class = "checkbox";
        if (this.props.option === "") {
            option_class = "option_clear";
            checkbox_class = "checkbox_clear";
        }
        return <div>
            <input type="checkbox" className={checkbox_class} id="checkbox" onClick={this.handleChange}/>
            <label className={option_class}>{this.props.option}</label>
        </div>
    }
}

class Hide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        const section = document.getElementById(this.props.section_id);
        const hide = document.getElementById(this.props.section_id + "_hide")
        if (section.style.display === "block") {
            section.style.display = "none";
            hide.src = "hide_icon.png";
        }
        else {
            section.style.display = "block";
            hide.src = "hide_icon_flipped.png";
        }
    }

    render() {
        return <div>
            <input id={this.props.section_id + "_hide"} className="hide" type="image" src="hide_icon.png" alt="hide" onClick={this.handleChange}/>
        </div>
    }
}



const header =
    <div className="header">
        <img src="logo.png" className="logo" alt="logo"/>
        <b className="titleStyle">Wheretoeat.com</b>
        <City />
        <Language language="ENG" margin_right="1%"/>
        <Language language="RU" margin_right="4%"/>
    </div>



const search =
    <div className="search">

        <p className="resultsNumber">1336 <span className="matched">places matched</span> </p> <hr/>

        <br/> <b className="section_name">Open now</b>
        <Checkbox option=""/>
        <button className="clear">clear filters</button>
        <hr className="separator"/>

        <br/> <b className="section_name">Food Type</b>
        <Hide section_id="food_type"/> <br/><br/>
        <div className="section" id="food_type">
            <div className="left">
                <Checkbox option=" Pizza" />
                <Checkbox option=" Burger" />
                <Checkbox option=" Sushi" />
                <Checkbox option=" Doner" />
                <Checkbox option=" Sandwich" />
                <Checkbox option=" Fried Chicken" />
            </div>
            <div className="right">
                <Checkbox option=" Eastern" />
                <Checkbox option=" European" />
                <Checkbox option=" Japanese" />
                <Checkbox option=" Korean" />
                <Checkbox option=" Chinese" />
            </div>
        </div>
        <hr className="separator"/>

        <br/> <b className="section_name">Brand</b>
        <Hide section_id="brand"/> <br/><br/>
        <div className="section" id="brand">
            <div className="left">
                <Checkbox option=" Dodo Pizza" />
                <Checkbox option=" Bahandi" />
                <Checkbox option=" Salam Bro" />
                <Checkbox option=" Sensei Sushi" />
                <Checkbox option=" Degirmen" />
                <Checkbox option=" KFC" />
                <Checkbox option=" Burger King" />
            </div>
            <div className="right">
                <Checkbox option=" Cafeteria" />
                <Checkbox option=" Tagam" />
                <Checkbox option=" Kaganat" />
                <Checkbox option=" Shafran" />
                <Checkbox option=" Kakao Dak" />
                <Checkbox option=" Red Dragon" />
            </div>
        </div>
        <hr className="separator"/>

        <br/> <b className="section_name">Beverages</b>
        <Hide section_id="beverages"/> <br/><br/>
        <div className="section" id="beverages">
            <div className="left">
                <Checkbox option=" Coffee" />
                <Checkbox option=" Tea" />
            </div>
            <div className="right">
                <Checkbox option=" Cold Drinks" />
            </div>
        </div>
        <hr className="separator"/>

        <br/> <b className="section_name">Price Range</b>
        <Hide section_id="price_range" /> <br/><br/>
        <div className="section" id="price_range">
            <div className="left">
                <Checkbox option=" < 1000 tg"/>
                <Checkbox option=" 1000 - 1500 tg" />
                <Checkbox option=" 1500 - 2000 tg"/>
            </div>
            <div className="right">
                <Checkbox option=" 2000 - 2500 tg"/>
                <Checkbox option=" 2000 - 3000 tg"/>
                <Checkbox option=" > 3000 tg" />
            </div>
        </div>
        <hr className="separator"/>

        <br/> <b className="section_name">Maximum Distance</b>
        <Hide section_id="max_distance" /> <br/><br/>
        <div className="section" id="max_distance">
            <div className="left">
                <Checkbox option=" within 200m"/>
                <Checkbox option=" within 500m" />
                <Checkbox option=" within 1km"/>
            </div>
            <div className="right">
                <Checkbox option=" within 2km" />
                <Checkbox option=" any location"/>
            </div>
        </div>
        <hr className="separator"/>

    </div>



const result =
    <div className="result">
        <table className="table">

        </table>
    </div>



ReactDOM.render(header, document.getElementById('header'));
ReactDOM.render(search, document.getElementById('search'));
ReactDOM.render(result, document.getElementById('result'));
