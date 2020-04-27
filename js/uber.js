// km đầu: x:16k; suv:18k; black:20k
// km 2 trở đi: x:14k; suv:15k; black:18k;
// km 21 trở đi: x:12k; suv:13k;black:15k;
// thời gian chờ: x: 2k/phút; suv:3k/1 phút;black:5k/1 phút;
// constants uber x
const UBERX_KM1 =16000;
const UBERX_KM20=14000;
const UBERX_KMTREN20=12000;
const UBERX_TIEN_CHO=2000;
// constants uber SUV
const UBERSUV_KM1 =18000;
const UBERSUV_KM20=15000;
const UBERSUV_KMTREN2=13000;
const UBERSUV_TIEN_CHO=3000;
// constants uber x
const UBERBLACK_KM1 =20000;
const UBERBLACK_KM20=18000;
const UBERBLACK_KMTREN20=15000;
const UBERBLACK_TIEN_CHO=5000;
document.getElementById('tinhTien').addEventListener('click',tinhTien);

function kiemTraLoaiXe() {
    var uberX = document.getElementById("uberX").checked;
    var uberSUV = document.getElementById("uberSUV").checked;
    var uberBlack = document.getElementById("uberBlack").checked;
    if (uberX)
        return "uberX";
    if (uberSUV)
        return "uberSUV";
    if (uberBlack)
        return "uberBlack";
    // nếu không nhấn vào button nào thì làm bằng alert
    alert('Bạn chưa chọn xe');
    return "error";
}
function tinhTienLoaiXe(soKM, thoiGian, km1, km20, kmTren20, tienThoiGianCho) {
    if(soKM<=1)
        return km1+thoiGian*tienThoiGianCho;
    if(soKM<=20)
        return km1+ (soKM-1)*km20+tienThoiGianCho*thoiGian;
    return km1 + (soKM-1)*km20 +(soKM-20)*kmTren20 +thoiGian*tienThoiGianCho;
    
}
function tinhTien(){
    var soKM = document.getElementById("soKM").value;
    var soThoiGian = document.getElementById("soThoiGian").value;
    var loaiXe = kiemTraLoaiXe();
    var tongTien=0;
    switch (loaiXe) {
        case "uberX":
            tongTien= tinhTienLoaiXe(soKM, soThoiGian,UBERX_KM1, UBERX_KM20, UBERX_KMTREN20, UBERX_TIEN_CHO);
            break;
        case "uberSUV":
            tongTien= tinhTienLoaiXe(soKM, soThoiGian, UBERSUV_KM1, UBERSUV_KM20, UBERSUV_KMTREN2, UBERSUV_TIEN_CHO);
            break;
        case "uberBlack":
            tongTien= tinhTienLoaiXe(soKM, soThoiGian, UBERBLACK_KM1, UBERBLACK_KM20, UBERBLACK_KMTREN20, UBERBLACK_TIEN_CHO);
            break;
        default:
            break;
    }
    console.log(tongTien);    
    document.getElementById("divThanhTien").style.display="block";
    document.getElementById("xuatTien").innerHTML=tongTien;
    console.log(tongTien);

}
