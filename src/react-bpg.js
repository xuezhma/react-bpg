import React, {Component} from 'react'

class ReactBPG extends Component {
    constructor(props) {
        super(props)
        this.BPGDecoder = this.props.BPGDecoder || window.BPGDecoder
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
            <canvas ref="canvas" />
        )
    }
}

export default ReactBPG