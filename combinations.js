const combinations = (elements) => {
	if( elements.length == 0 ){
		return [[]];
	}
	const first = elements[ 0 ];
	const postCombinations = combinations( elements.slice( 1 ) );
	const firstCombinations = [];
	postCombinations.forEach( ( combo ) => {
		firstCombinations.push([first, ...combo] )
	})
	return [...firstCombinations, ...postCombinations];
};

console.log(combinations([1,2,3,4,5,6]));
