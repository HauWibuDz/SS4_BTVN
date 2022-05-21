//Con người
class connguoi {
    constructor(ten, tuoi, gioitinh, diachi) {
        this.ten = ten;
        this.tuoi = tuoi;
        this.gioitinh = gioitinh;
        this.diachi = diachi;
    }
    checkgt() {
        if (this.gioitinh == 1) {
            return "Nam";
        }
        else if (this.gioitinh == 2) {
            return "Nữ";
        }
        else {
            return "Khác";
        }
    }
    hienThiThongTin() {
        document.getElementById("tbody").innerHTML +=
            `<tr>
                <td>${this.ten}</td>
                <td>${this.tuoi}</td>
                <td>${this.checkgt()}</td>
                <td>${this.diachi}</td>   
            </tr>`;
    }
}
var cn1 = new connguoi('Tú', 19, 1, 'Nam Định');
cn1.hienThiThongTin();
var cn2 = new connguoi('Thiện', 19, 3, 'Chương Mỹ');
cn2.hienThiThongTin();
var cn4 = new connguoi('Hậu', 19, 1, 'Sóc Sơn');
cn4.hienThiThongTin();
//Sinh viên
class sinhvien extends connguoi {
    constructor(ten, tuoi, gioitinh, diachi, msv, diemtoan, diemly, diemhoa) {
        super(ten, tuoi, gioitinh, diachi);
        super.checkgt();
        this.msv = msv;
        this.diemtoan = diemtoan;
        this.diemly = diemly;
        this.diemhoa = diemhoa;
    }
    avg() {
        return ((this.diemtoan + this.diemly + this.diemhoa) / 3);
    }
    rank() {
        let avg = this.avg();
        if (avg < 5) {
            return 'Kém';
        }
        else if (avg >= 5 && avg < 8) {
            return 'Khá';
        }
        else {
            return 'Giỏi';
        }
    }
    showsv() {
        document.getElementById("tbody-sv").innerHTML +=
            `
        <tr>
            <td>${this.msv}</td>
            <td>${this.ten}</td>
            <td>${this.tuoi}</td>
            <td>${this.checkgt()}</td>
            <td>${this.diachi}</td>
            <td>${this.diemtoan}</td>
            <td>${this.diemly}</td>
            <td>${this.diemhoa}</td>
            <td>${this.avg().toFixed(2)}</td>
            <td>${this.rank()}</td>
        </tr>
        `;
    }
}
var sv1 = new sinhvien('Thiện', 18, 1, 'Chương Mỹ', 'B9177', 5, 4, 4);
sv1.showsv();
var sv2 = new sinhvien('Hậu', 18, 1, 'Sóc Sơn', 'B9166', 9, 9, 8);
sv2.showsv();
var sv3 = new sinhvien('Ánh', 18, 2, 'Chương Mỹ', 'B9167', 7, 8, 6);
sv3.showsv();
//Nhân viên
class nhanvien extends connguoi {
    constructor(ten, tuoi, gioitinh, diachi, mnv, luong, songaycong) {
        super(ten, tuoi, gioitinh, diachi);
        super.checkgt();
        this.mnv = mnv;
        this.luong = luong;
        this.songaycong = songaycong;
    }
    tinhluong() {
        return this.luong * this.songaycong;
    }
    ranking() {
        var rankking = this.tinhluong();
        if (rankking < 7000000) {
            return 'Nhân viên quèn';
        }
        else if (rankking < 10000000) {
            return "Nhân viên hơi quèn 1 xíu";
        }
        else {
            return 'Còn đây là cán bộ cấp cao';
        }
    }
    showNV() {
        var tbody_nv = document.getElementById("tbody-nv");
        tbody_nv.innerHTML += `
            <tr>
                <td>${this.mnv}</td>
                <td>${this.ten}</td>
                <td>${this.tuoi}</td>
                <td>${this.checkgt()}</td>
                <td>${this.diachi}</td>
                <td>${this.songaycong}</td>
                <td>${this.luong}</td>
                <td>${this.tinhluong()}</td>
                <td>${this.ranking()}</td>
            </tr>
        `;
    }
}
var nv1 = new nhanvien('Thiện', 18, 1, 'Chương Mỹ', 'B90', 500000, 10);
nv1.showNV();
var nv2 = new nhanvien('Hậu', 19, 3, 'Sóc Sơn', 'B52', 500000, 30);
nv2.showNV();
var nv3 = new nhanvien('Tú', 19, 2, 'Nam Định', 'B64', 500000, 15);
nv3.showNV();
