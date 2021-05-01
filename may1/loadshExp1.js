import _ from 'loadsh';
import { map, tail, times, uniq } from 'lodash';

function  LoadshExp()
{
const words = ['sky', 'wood', 'forest', 'falcon', 
    'pear', 'ocean', 'universe'];

const fel = _.first(words);
const lel = _.last(words);
const suf =_.shuffle(words);
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
 
console.log(_.nth(nums, 3));
console.log(_.nth(nums, -3));

const c1=_.chunk(nums,2);
console.log(_.chunk(nums,2))

_.times(4,()=>
{
	console.log("vvv");
});
const run=()=>
{
	console.log("run");
}
_.delay(run,150);
console.log("some other msg")




const word = _.sample(words);


	return (

		<div>
				{fel}<br/>
				{lel}<br/>
				{c1}<br/>
				{word}<br/>

				{suf}<br/>
				
				
		</div>
		)


}
export default LoadshExp;