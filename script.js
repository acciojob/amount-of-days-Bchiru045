//your JS code here. If required.
function daysOfAYear(value) {
	const leapYearValue =366
	const notLeapYearValue = 365
	if (value% 400 ==0) {
		return leapYearValue;
	}
	else if(value %4==0)
	{
		return leapYearValue;
	}
	else if(value%100==0)
	{
		return notLeapYearValue
	}
	else{
		return notLeapYearValue
	}
}
console.log(daysOfAYear(2003))