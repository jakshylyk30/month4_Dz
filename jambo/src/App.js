import React from "react";
import {Remarkable} from "remarkable";

class Plice extends React.Component{
  constructor(props) {
    super(props);
      this.state = {value: "Привет, Мир!"};
      this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({value: e.target.value})
  }
  getRowMarkup() {
    const md = new Remarkable()
    return {__html: md.render(this.state.value)}
  }

  render() {
    return(
        <div className="Plice">
          <h3>Входные Данные</h3>
          <label htmlFor="markdown-contend">
            введите что то в формате plice
          </label>
          <textarea id="markdown-contend"
          onChange={this.handleChange}
          defaultValue={this.state.value}/>
          <h3>Вывод</h3>
          <div className="contend"
          dangerouslySetInnerHTML={this.getRowMarkup()}/>
        </div>
    )
  }
}

export default Plice;
