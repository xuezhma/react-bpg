# ReactBPG
This is a React Wrapper class for decoding and drawing BPG images on your web.

## Props:

`src`:(Required, string)  a string url for the file.

`BPGDecoder`:(Optional, string) We use a dependency for BPGDecoder from npm: [bpg-decoder](https://www.npmjs.com/package/bpg-decoder/), this decoder has three different options, `BPGDecoder` (14 bits, no animation), `BPGDecoder8` (8 bits, no animation) and `BPGDecoder8a` (8 bits, animation),  default is `BPGDecoder8a`.

## Usage:

```
npm install react-bpg --save

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

## Eample:
https://github.com/xuezhma/react-bpg/tree/master/example
