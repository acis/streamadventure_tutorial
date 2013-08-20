/**
 *Your program will get some html written to stdin. Convert all the inner html to
 upper-case for elements with a class name of "loud".

 You can use `trumpet` and `through` to solve this adventure.

 With `trumpet` you can create a transform stream from a css selector:

 var trumpet = require('trumpet');
 var fs = require('fs');
 var tr = trumpet();
 fs.createReadStream('input.html').pipe(tr);

 var stream = tr.select('.beep').createStream();

 Now `stream` outputs all the inner html content at `'.beep'` and the data you
 write to `stream` will appear as the new inner html content.

 */

var trumpet = require('trumpet');
var through = require('through');

var trumpet = trumpet();

var stream = trumpet.select('.loud').createStream();
stream.pipe(through(function(data) {
	this.queue(data.toString().toUpperCase());
})).pipe(stream);

//stream.pipe(through(function(data){this.queue(data.toString().toUpperCase())}, null));

process.stdin.pipe(trumpet).pipe(process.stdout);

