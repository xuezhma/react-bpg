import React, { Component, PropTypes } from 'react'
import decoders from 'bpg-decoder'

class ReactBPG extends Component {
    constructor(props) {
        super(props)
        switch(this.props.BPGDecoder) {
            case "BPGDecoder8":
                this.BPGDecoder = decoders["BPGDecoder8"]
                break;
            case "BPGDecoder":
                this.BPGDecoder = decoders["BPGDecoder"]
                break;
            default:
                this.BPGDecoder = decoders["BPGDecoder8a"]
        }
    }

    componentDidMount() {
		try {
			const ctx = this.refs.canvas.getContext('2d')
	        const img = new this.BPGDecoder(ctx);
	        const self = this
	        img.onload = function() {
	            self.refs.canvas.width = this.imageData.width
	            self.refs.canvas.height = this.imageData.height
	            ctx.putImageData(this.imageData, 0, 0)
	        }
	        img.load(this.props.src)
		} catch (e) {
			if (this.props.onError) return this.props.onError.call(this)
			throw(e)
		}
    }

    render() {
        return (
            <canvas ref="canvas" className={this.props.className} style={this.props.style}/>
        )
    }
}

ReactBPG.propTypes = {
	src: PropTypes.string.isRequired,
	onError: PropTypes.func,
	BPGDecoder: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object
}

export default ReactBPG
