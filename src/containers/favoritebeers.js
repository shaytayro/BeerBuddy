import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import Card from "../components/Card";
import ModalDial from "../components/ModalDial";
class Favorite extends Component {

    /**The state consists the current modal properties and the favorites list  */
    state = { storage: [], show: false, name: "", first_brewed: "", desc: "", food: "" }
    render() {
        return (
            <div className="favorite-beer">
                <div style={{ marginTop: "10%" }}>
                </div>
                <h3 style={{ marginLeft: "5%", fontFamily: "Verdana" }}>Favorite Beers
    <img class="ml-2 ml-lg-5" style={{ float: "right", width: "20%", marginTop: '-6%' }} src="http://cdn.lowgif.com/full/69bc02e04b3667e6-backyard-spaceship-star-by-laurents-laire-pencill-dribbble.gif" ></img>
                </h3>
                <div class="row" style={{ width: '90%', marginLeft: "auto", marginRight: "auto", marginTop: '3%', marginBottom: "3%" }} >
                    {this.state.storage.map((beer) =>
                        <Card close2={this.Close} fav={true} handleShow2={this.handleShow} beer2={beer} key={beer.id}></Card>
                    )}
                    <ModalDial close2={this.Close} show2={this.state.show} name2={this.state.name} first_brewed2={this.state.first_brewed} food2={this.state.food} desc2={this.state.desc} ></ModalDial>
                </div>
            </div>
        )
    }
    /** The function changes the favorites list*/
    componentDidUpdate(_props, _state) {
        if (sessionStorage.length !== _state.storage.length) {
            this.setState({ storage: this.getFavoriteBeers() })
        }
    }
    /** The function initializes the favorites list*/
    componentDidMount() {
        this.setState({ storage: this.getFavoriteBeers() })
    }
    /** The function return a list of favorites beer according to the session storage*/
    getFavoriteBeers() {
        let elements = [];
        Object.keys(sessionStorage).forEach((key) => {
            elements.push(JSON.parse(sessionStorage.getItem(key)));
        });

        return elements;

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
    }
}
const mapDispatchToProps = disaptch => {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
