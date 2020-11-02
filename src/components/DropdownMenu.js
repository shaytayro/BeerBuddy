
import React from "react";
import { Input } from "reactstrap";
class DropdownMenu extends React.Component {
/**The state consists of options and the updated value*/
  state = {
    opt: [
      { 1: "1" },
      { 2: "2" },
      { 3: "3" },
      { 4: "4" },
      { 5: "5" }], value: 1
  }

  render() {
    return (
      <div className="App">
        <Input class="rounded" type="select" style={{width:"22%",background:"#e6f2ff"}} onChange={this.changevalue} value={this.state.value}>
          {this.state.opt.map(option => {
            return (<option value={Object.values(option)}>
              {" "}
              {Object.keys(option)}{" "}
            </option>

            );
          })}
        </Input>
      </div>
    )
  }

  /**The method changes the tab's rank according to the user's choice*/
  changevalue = (event) => {
    let number = event.target.value
    this.setState({ value: number });
    let value = JSON.parse(sessionStorage.getItem(this.props.id))
    value.rank = number;
    sessionStorage.removeItem(this.props.id)
    sessionStorage.setItem(this.props.id, JSON.stringify(value));

  }

  /** The function initializes the rank of the card according to the saved rank*/
  componentDidMount() {
    if (sessionStorage.getItem(this.props.id) !== null)
      this.setState({ value: JSON.parse(sessionStorage.getItem(this.props.id)).rank });

  }

}

export default DropdownMenu;




