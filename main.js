const temp = [
    3.6, 3.9, 6.5, 9.9, 13.4, 16.2, 18.3, 17.9, 14.7, 10.9, 7.0, 4.2
]

function showTemp() {
    let currentHighest = temp[0];
    let currentLowest = temp[0];

    for (let i = 0; i < temp.length; i++) {
        if (temp[i] > currentHighest) {
            currentHighest = temp[i]
        }
        if (temp[i] < currentLowest) {
            currentLowest = temp[i]

        }
        
    }
    console.log('the highest temperature is:', currentHighest);
    console.log('the lowest temperature is:', currentLowest);
}
showTemp();

