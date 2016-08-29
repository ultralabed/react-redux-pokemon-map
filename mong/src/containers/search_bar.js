import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSelectPockmon } from '../actions/index';

class SearchBar extends Component {
	constructor(props){
		super(props);
        
        this.state = { selected: '0' };
        this.props.fetchSelectPockmon(this.state.selected);
	}

    change(event) {
        this.setState( { selected: event.target.value} );
        this.props.fetchSelectPockmon(event.target.value);
    }

	render(){
        console.log("selectedId=>" ,this.state.selected );
		return (
            <div className="search-bar">
                <select onChange={this.change.bind(this)} value={this.state.selected}>
                    <option value="0">All</option>
                    <option value="3">no.3-妙蛙花</option>
                    <option value="6">no.6-噴火龍</option>
                    <option value="10">no.10-綠毛蟲</option>
                    <option value="40">no.40-胖可丁</option>
                    <option value="45">no.45-霸王花</option>
                </select>
            </div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchSelectPockmon}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
