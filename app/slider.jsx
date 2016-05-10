
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

		var divStyle = {
			height:this.props.height,
			width:this.props.width,
			background:this.props.background,
			fontSize:this.props.fontSize,
			className:'unselectable'
		};

		var timeControlStyle  = {
			marginLeft:'auto',
			marginRight:'auto',
			textAlign:'center'
		};

		var buttonStyle = {
			marginLeft:'0.5em',
			marginRight:'0.5em',
			className:'unselectable'
		};

		var iconText = "fa fa-play";
		if (this.props.playing) {
			iconText = "fa fa-pause";
		}

		return (
			<div className="controlbar">
				<div className="time-control" >
					 <a class="btn" href="#"><i onClick={this._onSkipBackwardClick} className="fa fa-step-backward" style={buttonStyle}></i></a>
					 <a class="btn" href="#"><i onClick={this._onPlayClick} className={iconText} style={buttonStyle}></i></a>
					 <a class="btn" href="#"><i onClick={this._onSkipForwardClick} className="fa fa-step-forward" style={buttonStyle}></i></a>
					 <a class="btn" href="#"><span onClick={this._onMuteClick} className="unselectable mute"><input type="checkbox" checked={this.props.mute}/>Mute</span></a>
					<input type='range' value={this.props.range}
                    min='0' max='100' step='1'
                    className='test' />
				</div>	
			</div>
			);
	}

});

module.exports = ControlBar;