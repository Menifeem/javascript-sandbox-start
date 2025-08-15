function calculator(num1, num2, operator) {
    switch (num1, num2, operator) {
        case '+':
            console.log(num1 + num2);
            break;
        case '-':
            console.log(num1 - num2);
            break;
        case '*':
            console.log(num1 * num2);
            break;
        case '/':
            console.log(num1 / num2);
            break;
        default:
            console.log('Please remove. This is an error');
    }
}
//     switch (calculator) {
//         case '+':
//             sum = num1 + num2;
//             break;
//     }
// }



calculator(5, 2, '+');
calculator(5, 2, '-');
calculator(5, 2, '*');
calculator(5, 2, '/');
calculator(5, 2, '&');