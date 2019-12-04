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

const data_save = function() {
    
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

    return [team1, team2]
};

data_save();

const data_print = function() {
    var data = data_save();
    var team1 = data[0];
    var team2 = data[1];

    document.write(team1.name)

};

data_print();