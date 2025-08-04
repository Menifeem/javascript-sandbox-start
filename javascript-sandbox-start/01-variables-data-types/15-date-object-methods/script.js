// Methods on Date Objects

let q;
let d = new Date();                         // Intializing a Date into the 'd' variable

q = d.toString();                           // To display the entire date in string 


// Specific parts of the date = Year
q = d.getFullYear();

// Pull the date from existing variable
let f = new Date('2021/04/17'); 
f = f.getFullYear();                        // Results in acquiring the '2021' year from line 13


// Acquire the month
let g = new Date('2021/04/17');
// g = g.getMonth();
g = g.getMonth() + 1;                       // Add the '+ 1' to give you the correct month since it is zero based   

// Acquire the Day of the month
let h = new Date('04/17/2021');
h = h.getDate();                            // Results in '17'


// Acquire the day of the week
let j = new Date('04/17/2021');
j = j.getDay();                             // Results in '6' 6th day of the week


// Acquire current hours
let k = new Date('04-17-2021 03:14:22');
k = k.getHours();                           // Results in '3' as in the 3rd hour


// Acquire minutes
let l = new Date('04-17-2021 03:14:22');
l = l.getMinutes();                         // Results in '14' minutes displaying


// Acquiring seconds
let z = new Date('04-17-2021 03:14:22');
z = z.getSeconds();                         // Results in '22' seconds


// Acquire millisecs
let x = new Date('04-17-2021 03:14:22');
x = x.getMilliseconds();                    // Results in '0' since we did not have anything listed but if we had nothing in the () in prev line then it would provide a update for real time



// Constructing a date from these methods
let c = new Date('04-17-2021 03:14:22');
c = `${c.getFullYear()}-${c.getMonth() + 1}-${c.getDate()}`;



// API Used for Dates (INTL.date time format) / used for diff regions
let v = new Date('04-17-2021 03:14:22');
v = Intl.DateTimeFormat('en-US').format(v)              // Converts format to '4/14/2021'

// UK Format
let b = new Date('04-17-2021 03:14:22');
b = Intl.DateTimeFormat('en-GB').format(b)              // Converts to '17/04/2021'



// Default location
let n = new Date('04-17-2021 03:14:22');
n = Intl.DateTimeFormat('default').format(n)            // Uses the default location 


// Format but acquiring the month
let m = new Date('04-17-2021 03:14:22');
m = Intl.DateTimeFormat('default', { month: 'long' }).format(m)         // Gives me the month 'April'


// Format but acquiring the month (Cont'd > shorter method)
let p = new Date('04-17-2021 03:14:22');
p = p.toLocaleString('default', { month: 'short'});                     // Abreviates month 'Apr'



console.log(q);
console.log(f);
console.log(g);
console.log(h);
console.log(j);
console.log(k);
console.log(l);
console.log(z);
console.log(x);
console.log(c);
console.log(v);
console.log(b);
console.log(n);
console.log(m);
console.log(p);
