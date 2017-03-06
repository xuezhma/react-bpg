# ReactBPG
This is the React Wrapper class for decoding and drawing BPG format file on your web.

## Props:

`src`:(Required, string)  a string url for the file.

`BPGDecoder`:(Optional, string) We use a dependency for BPGDecoder from npm: [bpg-decoder](https://www.npmjs.com/package/bpg-decoder/), this decoder has three different options, `BPGDecoder`, `BPGDecoder8` and `BPGDecoder8a`, by default this prop is set to `BPGDecoder8a`.

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
