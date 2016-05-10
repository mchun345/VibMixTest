
import React from 'react';
import d3 from 'd3';

var PlaybackStore = require('./stores/playbackstore.js');
var VTIconStore = require('./stores/vticonstore.js');


var ControlBar = React.createClass({

	propTypes: {
		name : React.PropTypes.string.isRequired,
		playing: React.PropTypes.bool.isRequired,
		mute: React.PropTypes.bool.isRequired
			},

	getDefaultProps: function() { 
	    return {
	     width:'50%',

	    }
	},


	/**
	* Event handlers
	* 
	*/
	_onMuteClick : function (event) {
		PlaybackStore.actions.toggleMute();
	},

	_onPlayClick : function (event) {
		VTIconStore.actions.selectVTIcon(this.props.name);
		PlaybackStore.actions.togglePlaying();
	},

	_onSkipBackwardClick : function (event) {
		VTIconStore.actions.selectVTIcon(this.props.name);
		PlaybackStore.actions.skipBackward();
	},

	_onSkipForwardClick : function (event) {
		VTIconStore.actions.selectVTIcon(this.props.name);
		PlaybackStore.actions.skipForward();
	},

	/**
	* Rendering
	* 
	*/

	render : function() {

		var containerStyle  = {
			marginLeft:'15%',
			marginTop:'10%'
		};

		var leftSliderEndStyle = {
			marginLeft:'15%'
		};

		var lengthStyle = {
            width:'500px' //should be calculated as current screen width in some way...
		};

		var sliderTitle = {
			fontWeight:'bold',
			marginLeft:'35%'
		}


		return (
			<div className="slider-container" style={containerStyle}>
			<p style={sliderTitle}>Current Parameter</p>
			<label className='h5 bold block'>Simple </label>
					<input type='range' value={this.props.range}
                    min='0' max='100' step='1'
                    className='slider-bar' style={lengthStyle}/>
            <label className='h5 bold block'> Complex</label>
			</div>
			);
	}

});

module.exports = ControlBar;