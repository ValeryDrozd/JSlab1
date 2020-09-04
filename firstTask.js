function arr(n){
    let a = [];
    for(let i = 0;i<n;i++)
        a.push(i);
	return a;
}

function check(a,b,c){
    return (a%b==0 && a%c==0);
}

function capitalise(word){
    return word[0].toUpperCase()+word.substr(1);
}
console.log(arr(3));
console.log(arr(5));
console.log(check(6,2,3));
console.log(check(6,2,5));
console.log(capitalise("hello,world!"));

