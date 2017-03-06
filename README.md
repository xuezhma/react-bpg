# ReactBPG
This is the React Wrapper class for decoding and drawing BPG format file on your web.

## Props:

`src`: a string url for the file. (required)
`BPGDecoder`: the decoder used in the component, by default we have already has a Decoder from npm: [bpg-decoder](https://www.npmjs.com/package/bpg-decoder) (Optional)


## Example:

```
npm install react-bpg

```
Then,
```
import ReactBPG from 'react-bpg'

class YourCoolAwesomeClass extends React.Component {
	render() {
		return <ReactBPG src="path/to/your/awesome/bpg/picture.bpg" />
	}
}
```
