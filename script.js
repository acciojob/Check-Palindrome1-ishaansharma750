// complete the given function

function palindrome(str){
	let string = str.toLowerCase();
	let i=0;
	let j=string.length-1;
	while(i<j){
		if(string[i]==" "){
			i++;
		}
		if(string[j]==" "){
			j--;
		}
		if(string[i]!=string[j]){
			return false;
		}
		i++;
		j--;
	}
	return true;
}
module.exports = palindrome