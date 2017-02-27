# all-the-german-words-ascii

An array of ~1,6 million German words, provided as lowercase ASCII list.
Umlauts and ligatures are being replaced by the corresponding spelling with two characters.
Works with node and browserify.

For a list of German words with the right spelling see [all-the-german-words](http://npm.im/all-the-german-words).

## Programmatic Usage

To use the module in Javascript code, install it locally:

```sh
npm install all-the-german-words-ascii --save
```

Then:

```js
var woerter = require("all-the-german-words-ascii")
var quatschWoerter = woerter.filter(function(w) { return /quatsch/.test(w) })
console.log(quatschWoerter)
```

## Command Line Usage

There's a CLI that prints all words to STDOUT. Install it globally:

```sh
npm i -g all-the-german-words-ascii
```

Now you can print all words:

```sh
woerter-ascii | grep donaudampfschifffahrtsgesellschaft
```
