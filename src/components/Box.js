import React from "react"

class Box extends React.Component {
  render() {
    console.log(this.props)

    return (
      <div className="box col-sm-3 col-6">
        <span className="material-icons" style={{ fontSize: "100px", color: this.props.color }}>
          {this.props.icon}
        </span>
        <p>{this.props.value}{this.props.unit}</p>
      </div>
    )
  }
}

export default Box
