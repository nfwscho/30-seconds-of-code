const test = require('tape');
const join = require('./join.js');

test('Testing join', (t) => {
	//For more information on all the methods supported by tape
	//Please go to https://github.com/substack/tape
	t.true(typeof join === 'function', 'join is a Function');
	//t.deepEqual(join(args..), 'Expected');
	//t.equal(join(args..), 'Expected');
	//t.false(join(args..), 'Expected');
	//t.throws(join(args..), 'Expected');
	t.end();
});