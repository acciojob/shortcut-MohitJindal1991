function shortcut(s1, s2) {
  // your code here
	if(s1==="" || s2==="") return "";

	let ans=s1.charAt(0)+s2.charAt(0);
	return ans;
}

// // Do not change the code below.d
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
