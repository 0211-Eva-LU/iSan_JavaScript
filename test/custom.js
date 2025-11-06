function getRandom(x) {
    return Math.floor(Math.random() * x) + 1;
}

function getPowerNum() {
    //放置第一區6個號碼的陣列變數
    let arr = [];
    for (i = 1; i <= 6; i++) {
        //一注威力彩有6個 所以讓迴圈跑六次

        //隨機取得 1~38之間的數字
        let num = getRandom(38);

        //檢查是否有出現過(重複) 回傳位置,如果大於-1 (至少是第一個)
        if (arr.indexOf(num) > -1) {
            i--;
            continue;

        } else {
            //沒出現過的話就寫進陣列裡
            arr.push(num);
        }
    }

    arr.sort(function (a, b) {
        return a - b;
    });

    return arr;
}

for (let i = 0; i < 10; i++) {
    let arr = getPowerNum();
    // console.log(arr);
    let num01 = arr.join(",");
    let num02 = getRandom(8);

    console.log(`第一區號碼為 ${num01}，第二區號碼為，${num02}`);
}