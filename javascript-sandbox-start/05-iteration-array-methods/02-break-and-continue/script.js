// Break & Continue - Use break when you need to exit a loop entirely. Use continue when you want to skip specific iterations but continue looping. Use labels to control nested loops effectively.

// Break 
for (let i = 0; i <= 20; i++) {
    if (i === 15) {                         // If 'i' is = to 15
        console.log('Breaking...');         // Log 'Breaking' once we hit #15
        break;                              // Here we break / stop the loop
    }

    console.log(i);
}




// Continue
for (let i = 0; i <= 20; i++) {
    if (i === 13) {                         // If 'i' is = to 13
        console.log('Skipping 13');         // Log 'Skipping 13' once we hit #13
        continue;                           // Here we continue through the loop
    }
    
    console.log(i);
}