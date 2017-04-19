# ReactBPG
This is a React Wrapper class for decoding and drawing BPG images on your web.

## Props:

`src`: (Required, string)

A string url for the file.

`onError`: (Optional, function)

A callback function to call if somehow our BPG decoder fails to decode. The callback will be binded to the `this` of `react-bpg` component when invoked, so you have access to the canva as `this.refs.canvas`.

If `onError` is left empty, an `could not decode image` error will be threw.

`BPGDecoder`: (Optional, string)

We use a dependency for BPGDecoder from npm: [bpg-decoder](https://www.npmjs.com/package/bpg-decoder/), this decoder has three different options: `BPGDecoder` (14 bits, no animation), `BPGDecoder8` (8 bits, no animation) and `BPGDecoder8a` (8 bits, animation), and our default is `BPGDecoder8a`.

`className`: (Optional string)
`style`: (Optional object)

We recommend you to specify the size of your images so your layout does  not change when the images are loaded in

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
