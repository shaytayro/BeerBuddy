
import React, { Component } from 'react'
import DropdownMenu from "../components/DropdownMenu";
class Card extends Component {
    state = { color: "" }
    render() {
        return (
            <div className="card" style={{ width: '25%' }}>
                <div>{this.props.fav ? <DropdownMenu id={this.props.beer2.id}></DropdownMenu> : <></>}</div>
                <p style={{ fontSize: "36px" }} >
                    <i style={{ color: this.state.color, cursor: "pointer" }} class="fa fa-star" onClick={() => this.favorite(this.props.beer2)}></i>
                </p>
                <img style={{ width: '15%', cursor: "pointer", marginLeft: "auto", marginRight: "auto", fontFamily: "san-serif", marginTop: '10%' }} onClick={() => this.props.handleShow2(this.props.beer2.name, this.props.beer2.first_brewed, this.props.beer2.description, this.props.beer2.food_pairing)} className="card-img-top" src={this.changePicture(this.props.beer2.image_url)} alt="Card image cap"></img>
                <div style={{ fontFamily: "san-serif", marginLeft: "auto", marginRight: "auto", marginTop: '5%' }} className="card-body" >
                    <h5 style={{ cursor: "pointer", fontFamily: "san-serif" }} onClick={() => this.props.handleShow2(this.props.beer2.name, this.props.beer2.first_brewed, this.props.beer2.description, this.props.beer2.food_pairing)} className="card-img-top" src={this.changePicture(this.props.beer2.image_url)} className="card-title">{this.props.beer2.name} </h5>
                </div>
                <p style={{ marginRight: "auto", marginLeft: "auto", marginBottom: "auto", fontSize: "20px" }}> {this.props.beer2.id}</p>
            </div>

        )
    }
    /** The function initializes the color of the star according to its number*/
    componentDidMount() {
        if (JSON.parse(sessionStorage.getItem(this.props.beer2.id)) === null) {
            this.setState({ color: "black" })
        }
        else {
            this.setState({ color: "#e6e600" })
        }

    }
    /**The function changes the color of the star according to its number */
    componentDidUpdate(_prop, _state) {
        if (this.props.beer2.id !== _prop.beer2.id) {
            if (JSON.parse(sessionStorage.getItem(this.props.beer2.id)) === null) {
                this.setState({ color: "black" })
            }
            else {
                this.setState({ color: "#e6e600" })
            }


        }
    }
    /**The function adds / removes the card from the favorites and updates the
       color of the star*/
    favorite(beer) {
        if (JSON.parse(sessionStorage.getItem(beer.id)) === null) {
            beer.rank = 0;
            sessionStorage.setItem(beer.id, JSON.stringify(beer));
            this.setState({ color: "#e6e600" })
        }

        else {
            const result = window.confirm("Do you want to remove it from favorites ?")
            if (result) {
                sessionStorage.removeItem(beer.id);
                this.setState({ color: "black" })
                this.props.close2();
            }
        }

    }
    /**Sometimes the Api provides an image that is not beer or does not provide
       an image at all so the function replaces the damaged image in real picture
       (after consulting Nofar)*/
    changePicture = (url) => {
        if (url == "https://images.punkapi.com/v2/keg.png" || url == null) {
            return "https://images.punkapi.com/v2/192.png";
        }
        else {
            return url;
        }
    }

}

export default Card;




