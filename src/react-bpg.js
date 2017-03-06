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
        const ctx = this.refs.canvas.getContext('2d')
        const img = new this.BPGDecoder(ctx);
        const self = this
        img.onload = function() {
            self.refs.canvas.width = this.imageData.width
            self.refs.canvas.height = this.imageData.height
            ctx.putImageData(this.imageData, 0, 0)
        }
        img.load(this.props.src)
    }

    render() {
        return (
            <canvas ref="canvas" className={this.props.className} style={this.props.style}/>
        )
    }
}

ReactBPG.propTypes = {
	src: PropTypes.string.isRequired,
	BPGDecoder: PropTypes.string
}

export default ReactBPG
