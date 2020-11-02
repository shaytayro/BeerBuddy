import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getBeersAction } from '../beersActions';
import { getFoodAction } from '../beersActions';

import ModalDial from "../components/ModalDial";
import Card from "../components/Card";

class Browse extends Component {
    constructor(props) {
        super(props)
        this.input = React.createRef();
    }
    /**The state consists if the current modal properties and the search food state */
    state = { FoodState: false, FoodInput: "", show: false, name: "", first_brewed: "", desc: "", food: "" }

    componentDidMount() {
        this.setState({ FoodState: false, FoodInput: "" });
        this.props.getBeers(1);
    }
    render() {
        const pagesButtonsRender = this.getPagesButtonsRender();
        return (

            <div className="Browse-page">

                <div style={{ marginTop: "6%" }}>
                    <p className="ml-5 ml-lg-3" style={{ fontFamily: "Verdana" }}>Food Pairing:
                    <input ref={this.input} style={{ fontFamily: "Verdana", height: "80%" }} className="ml-8 ml-lg-2" type="text" placeholder="Search" name="search"></input>
                        <button type="submit" onClick={() => this.handlerfoodState()} style={{ float: "rigth", height: '100%', background: "#2196F3", color: "white", border: "1px solid grey", cursor: "pointer" }}>
                            <i className="fa fa-search"></i></button>
                        <img className="ml-2 ml-lg-5" style={{ float: "right", width: "20%", marginTop: '-4%' }} src="https://cdn.dribbble.com/users/3205235/screenshots/6134931/clinking-beers.gif" ></img>
                    </p>
                </div>
                <div className="row" style={{ width: '90%', marginLeft: "auto", marginRight: "auto", marginTop: '5%' }} >
                    {this.props.beers.map((beer) =>
                        <Card close2={this.Close} fav={false} handleShow2={this.handleShow} beer2={beer} key={beer.id} ></Card>
                    )}
                </div>
                <div className="row" style={{ width: '90%', marginLeft: "auto", marginRight: "auto", marginTop: '2%' }}>
                    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                {pagesButtonsRender}
                            </ul>
                        </nav>
                    </div>
                    <ModalDial close2={this.Close} show2={this.state.show} name2={this.state.name} first_brewed2={this.state.first_brewed} food2={this.state.food} desc2={this.state.desc} ></ModalDial>

                </div>

            </div>


        )
    }
    /**The function creates the elements for pagination*/
    getPagesButtonsRender() {
        let pagesButtonsRender = [];
        for (let i = 1; i <= 10; i++) {
            pagesButtonsRender.push(<li key={i} className="page-item">
                <button className="page-link" onClick={() => this.handlerClickPage(i)}>{i}</button>
            </li>);
        }
        return pagesButtonsRender;
    }

    /**The function handle food pairing search*/
    handlerfoodState() {
        this.setState({ FoodInput: this.input.current.value })
        if (this.input.current.value !== "") {
            this.setState({ FoodState: true })
            this.props.getfood(this.input.current.value, 1);
        }
        else {
            this.setState({ FoodInput: "" })
            this.setState({ FoodState: false })
            this.props.getBeers(1);
        }
    }

    /**The function handles the change in the page number*/
    handlerClickPage(pageNumber) {
        if (this.state.FoodState) {
            this.props.getfood(this.state.FoodInput, pageNumber);
        }
        else {
            this.props.getBeers(pageNumber);
        }
    }

    /**The function handles the user's request to open a model window*/
    handleShow = (name, first_brewed, desc, food) => {
        this.setState({ show: true, name: name, first_brewed: first_brewed, desc: desc, food: food });

    }
    /**The function handles the user's request to close a model window*/
    Close = (event) => {
        this.setState({ show: false });

    }

}

const mapStateToProps = state => {
    return {
        beers: state.beersReducer.beers
    }
}
const mapDispatchToProps = disaptch => {
    return {
        getBeers: (pageNumber) => disaptch(getBeersAction(pageNumber)),
        getfood: (food, pageNumber) => disaptch(getFoodAction(food, pageNumber)),

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);