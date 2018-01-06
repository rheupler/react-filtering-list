import React, { Component } from 'react';
import './Quote.css';

class Quote extends Component {


  render() {
    return(
      <div>
        <section className="section-wrapper">
          <div>
            <div className="section-header">
              <h1>Exercise 2 - CTA Quote</h1>
              <div id="resultDiv"></div>
            </div>

            <div className="cta-body">
              <div className="cta-body__text" id="joke-content">
                <p>{this.props.joke}</p>
              </div>
              <div className="cta-body__btn">
                <button onClick={this.props.updateJoke}>TELL ME MORE</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Quote;
