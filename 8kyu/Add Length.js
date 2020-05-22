function addLength(str) {
    let answer = str.split(' ').map(word => `${word} ${word.length}`);
    return answer;
    }