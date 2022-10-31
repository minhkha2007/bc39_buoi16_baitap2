// Bài 5
document.getElementById('btnBai5').onclick = function () {
    // input 
    var number = document.getElementById("number").value * 1;

    // output
    var ketQua = "";

    for (iso = 2; iso <= number; iso++) {
        var checkSNT = kiemTraSoNguyenTo(iso);
        //Nếu true là số nguyên tố
        if (checkSNT) {
            ketQua += iso + " ";
        }
    }
    document.getElementById("ketQuaBai5").innerHTML = ketQua;
}

function kiemTraSoNguyenTo(number) {
    //output: true or false
    var checkSNT = true;
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            checkSNT = false;
            break;
        }
    }
    return checkSNT;
}

