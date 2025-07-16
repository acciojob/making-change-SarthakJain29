const makeChange = (c) => {
  const change = {q:0, d:0, n:0, p:0};
  while(c >= 25){
	  change.q += 1;
	  c -= 25;
  }
  while(c>=10){
	  change.d += 1;
	  c -= 10;
  }
  while(c>=5){
	  change.n += 1;
	  c -= 5;
  }
  while(c>=1){
	  change.p += 1;
	  c -= 1;
  }
  return change;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
