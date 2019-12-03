let s = 0;
let b = 0;
let o = 0;
let hit = 0;

// 투구 결과 출력
const pitch_results = function() {
    const results = ["스트라이크", "볼", "안타", "아웃"];
    const n = Math.floor(Math.random() * 4);
    return results[n];
};

// 볼카운트 계산
const ball_count = function(result) {
    if (result === "스트라이크") {
        if (s < 2) {
            s += 1;
        } else {
            s = 0;
            b = 0;
            o += 1;
        }
    } else if (result === "볼") {
        if (b < 3) {
            b += 1;
        } else {
            s = 0;
            b = 0;
            hit += 1;
        }
    } else if (result === "안타") {
        s = 0;
        b = 0;
        hit += 1;
    } else {
        s = 0;
        b = 0;
        o += 1;
    }
}

// 볼카운트 상황 출력
const ball_count_print = function(result) {
    if (s === 0 & b === 0) {
        if (o === 3) {
            if (result === "스트라이크") {
                document.write(result + "!<br>아웃!<br>" + s + "S  " + b + "B  " + o + "O<br><br>");
            } else {
                document.write(result + "!<br>" + s + "S  " + b + "B  " + o + "O<br><br>");
            }
            document.write("최종 안타수: " + hit + "<br>GAME OVER");
        } else {
            if (result === "스트라이크") {
                document.write(result + "!<br>아웃! 다음 타자가 타석에 입장했습니다.<br>" + s + "S  " + b + "B  " + o + "O<br><br>");
            } else if (result === "볼") {
                document.write(result + "!<br>볼넷, 타자 진루합니다! 다음 타자가 타석에 입장했습니다.<br>" + s + "S  " + b + "B  " + o + "O<br><br>");
            } else {
                document.write(result + "! 다음 타자가 타석에 입장했습니다.<br>" + s + "S  " + b + "B  " + o + "O<br><br>");
            }
        }
    } else {
        document.write(result + "!<br>" + s + "S  " + b + "B  " + o + "O<br><br>");
    }
}

// 경기 진행
const main = function() {
    while (o < 3) {
        if (s === 0 && b === 0 && o === 0 && hit === 0) {
            document.write("신나는 야구 게임!<br>첫 번째 타자가 타석에 입장했습니다.<br><br>");
        }
    
        const pitch = pitch_results();
        ball_count(pitch);
        ball_count_print(pitch);
    }       
    
    if (o === 3) {
        hit = 0;
        o = 0;
    }
};