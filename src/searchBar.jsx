import React, {Component} from 'react';
import apiSearch from './apiSearch.js';

class SearchBar extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      content: ["true"],
      default: [],
      stars: ''
    };
  }

  _onInputValueChanged(event) {
    let value = event.target.value
    this.setState({ value });
  }

  _onSearchClick() {
    let information = [];
    let defaultInfo = [];
    let star;
    if (this.state.value.length) { 
      apiSearch.fetchData(this.state.value).then(data => {
        data = JSON.parse(data);
        //console.log(data);
        if (data) { 
          for (let key in data) {
            information.push(data[key]);
            defaultInfo.push(key);
          }
          //console.log(data);
          this.setState({content: information});
          this.setState({default: defaultInfo});
          this.setState({stars: data.imdbRating});
        }
      });
    }
    return false;
  }

  _contentOnPage() {
    if (this.state.content.length > 3) {
       return   <div className="container">
                  <div className="row info">
                    <div className="col-md-4 col-sm-12 col-xs-12 photo">
                      <img id="image" src={this.state.content[13]} alt="Poster" />
                    </div>
                    <div className="col-md-1 col-sm-2 col-xs-2 categories">
                      <p> 
                        {this.state.default[0]}:
                      </p>
                      <p>
                        {this.state.default[1]}:
                      </p>
                      <p>
                        {this.state.default[2]}:
                      </p>
                      <p>
                        {this.state.default[3]}:
                      </p>
                      <p>
                        {this.state.default[4]}:
                      </p>
                      <p>
                        {this.state.default[5]}:
                      </p>
                      <p>
                        {this.state.default[6]}:
                      </p>
                    </div>
                    <div className="col-md-4 col-sm-10 col-xs-10 results">
                      <p> 
                        {this.state.content[0]}
                      </p>
                      <p>
                        {this.state.content[1]}
                      </p>
                      <p>
                        {this.state.content[2]}
                      </p>
                      <p>
                        {this.state.content[3]}
                      </p>
                      <p>
                        {this.state.content[4]}
                      </p>
                      <p>
                        {this.state.content[5]}
                      </p>
                      <p>
                        {this.state.content[6]}
                      </p>
                    </div>
                    <div className="col-md-3  col-sm-5 col-xs-12 stars">
                      <p>Rating:</p>
                      <p>{this.state.stars}</p>
                    </div>
                   </div>
                   <div className="row info">
                    <div className="col-md-2 col-sm-2 clo-xs-3 categories1">
                      <p className="actors">
                        {this.state.default[8]}:
                      </p>
                      <p className="plot">
                        {this.state.default[9]}:
                      </p>
                      <p>
                        {this.state.default[10]}:
                      </p>
                      <p>
                        {this.state.default[11]}:
                      </p>
                      <p>
                        {this.state.default[12]}:
                      </p>
                      <p>
                        {this.state.default[14]}:
                      </p>
                    </div>
                    <div className="col-md-9 col-sm-10 col-xs-9 results1">
                      <p className="actors">
                        {this.state.content[8]}
                      </p>
                      <p className="plot">
                        {this.state.content[9]} 
                      </p>
                      <p>
                        {this.state.content[10]}
                      </p>
                      <p>
                        {this.state.content[11]}
                      </p>
                      <p>
                        {this.state.content[12]}
                      </p>
                      <p>
                        {this.state.content[14]}
                      </p>
                    </div>
                  </div>
                </div> 
    } else if (this.state.content[0] == "False") {
      return  <div className="row"> 
                <div className="col-md-12 error">
                  Unfortunatly, we can not find your movie. Try to search again. 
                </div>
              </div>
    } else {
      return  <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12 info">
                  <div className="col-md-4 col-sm-12 col-xs-12 picture">
                    <p className="off">Recommendations:</p>
                    <img src="src/styles/img/warcraft.jpg" />
                  </div>
                  <div className="col-md-4 col-sm-12 col-xs-12  picture">
                    <img src="src/styles/img/suicide.jpg" />
                  </div>
                  <div className="col-md-4 col-sm-12 col-xs-12  picture">
                    <img src="src/styles/img/bat.jpg" />
                  </div>
                </div>
              </div>
    }
  }

  render() {
    return  <div className="big-container">
              <div className="container">
                <div className="col-md-12 search">
                  <input className="search-input" type="text" value={this.state.value} placeholder="Search" onChange={::this._onInputValueChanged} />
                  <input type="button" className="btn btn-primary" value="Search" onClick={::this._onSearchClick} />
                </div>  
              </div>
                {this._contentOnPage()}
            </div>
  }
}

export default SearchBar;