// 



let d;

d = new Date();                                 // Results in today's date & time

// Turning date into a string
a = d.toString();


// To set a specific date
s = new Date(2027, 5, 1);                       // Results in 'July 1, 2027' since it counts in 0 based so Jan = 0


// To add a time to the date
s = new Date(2027, 5, 1, 11, 17, 10);           // Results in time '11:17:10(secs)'


// Pass in a string
f = new Date('2023-4-7');                       // Results in 'Apr 7 2023' > this method is not zero based so Jan = 1

// Pass in string with time
g = new Date('2023-04-07T07:15:23');            // Results in 'Apr 7 2023 Time 7:15:23(sec)'
h = new Date('04/10/2022 04:17:55');            // Results in 'Apr 10 2022 Time 4:17:55(sec)'




// Time Stamps
j = Date.now();                                 // Captures all the way to the millisec 


// Time Stamp of a specific date (get time or value of methods)
k = new Date('08-09-2021 10:31:45');
k = k.getTime();                                // Results in the exact time stamps of line 36 exact date '1628519505000' & it will remain static



// Pt 2 (Value Of)
l = k.valueOf();                                // Results in the same as lines 36/37


// Create date objects from a Time Stamp(Ex of a Time Stamp - 1628519505000)
z = new Date(1628519505000);                    // Results in 'Aug 09 2021 10:31:45(secs)'

// Cont'd but converting it into seconds
x = Math.floor(Date.now() / 1000);              // We take the desired date and divide it by 1000(a thousand millisecs in a sec) / Results in '1753675115'


console.log(d);
console.log(typeof d);                          // Results in displaying what is a date = 'object'
console.log(typeof a);
console.log(s);
console.log(f);
console.log(g);
console.log(h);
console.log(j); 
console.log(k);
console.log(l);
console.log(z); 
console.log(x);                       