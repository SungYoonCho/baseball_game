// 볼카운트 초기화
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


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 데이터 저장 함수 정의

const data_save = function() {
    
    // 생성자 함수 정의
    const Player = function(name, batting_avg) {
        this.name = name;
        this.batting_avg = batting_avg;
    };
    
    const Team = function(name, batters, pitcher) {
        this.name = name;
        this.batters = batters;
        this.pitcher = pitcher;
    };

    // 1팀 1~9번 타자 객체 생성 및 저장
    var arr_batter_1 = [];

    const make_batter_1 = function(arr) {
        for (var i = 0; i < 9; i++) {
            eval("var t1p" + i + "= new Player(document.getElementById('x'+i).value, document.getElementById('bx'+i).value);");
        };
    
        for (var n = 0; n < 9; n++) {
            eval("arr[" + n + "] = t1p" + n + ";"); 
        };
    
    };

    make_batter_1(arr_batter_1);

    // 1팀 투수 객체 생성 
    let pitcher_1 = {};
    pitcher_1.name = document.getElementById('x9').value;

    // 1팀 객체 생성 및 투수 타자 정보 저장
    var team1 = new Team(document.getElementById('team1').value, arr_batter_1, pitcher_1);


    // 2팀 1~9번 타자 객체 생성 및 저장
    var arr_batter_2 = [];

    const make_batter_2 = function(arr) {
        for (var i = 0; i < 9; i++) {
            eval("var t2p" + i + "= new Player(document.getElementById('y'+i).value, document.getElementById('by'+i).value);");
        };
    
        for (var n = 0; n < 9; n++) {
            eval("arr[" + n + "] = t2p" + n + ";"); 
        };
    
    };

    make_batter_2(arr_batter_2);

    // 2팀 투수 객체 생성 
    let pitcher_2 = {};
    pitcher_2.name = document.getElementById('y9').value;

    // 2팀 객체 생성 및 투수 타자 정보 저장
    var team2 = new Team(document.getElementById('team2').value, arr_batter_2, pitcher_2);

    alert("팀 데이터 입력이 완료되었습니다.");

    return [team1, team2]
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 데이터 출력 함수 정의

const data_print = function() {
    var data = data_save();
    var team1 = data[0];
    var team2 = data[1];

    // 팀1 정보 출력
    document.write(team1.name + " 팀 정보<br>")
    for (var i = 0; i < 9; i++){
        eval("document.write((" + i + "+1) + '번 ' + team1.batters[" + i + "].name + ', ' + team1.batters[" + i + "].batting_avg + '<br>');");
    }
    document.write("투수 " + team1.pitcher.name + "<br><br>");

    // 팀2 정보 출력
    document.write(team2.name + " 팀 정보<br>")
    for (var n = 0; n < 9; n++){
        eval("document.write((" + n + "+1) + '번 ' + team2.batters[" + n + "].name + ', ' + team2.batters[" + n + "].batting_avg + '<br>');");
    }
    document.write("투수 " + team2.pitcher.name);

};
