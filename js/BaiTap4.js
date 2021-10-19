/**
 * Giải thích các biến dùng trong chương trình:
 * + 
 */
//*Xử lý giao diện
function XuLyLoaiKhacnhHang(value) {
    if (value == "2") {
        document.querySelector("#container__txtSoKetNoi").classList.remove("invisible");
        document.querySelector("#txtSoKetNoi").disabled = false;
    }
    else {
        document.querySelector("#container__txtSoKetNoi").classList.add("invisible");
        document.querySelector("#txtSoKetNoi").disabled = true;
        document.querySelector("#txtSoKetNoi").value = "";
    }
}
const NHA_DAN_PHI_HOA_DON = 4.5;
const NHA_DAN_PHI_CO_BAN = 20.5;
const NHA_DAN_PHI_1KENH_CAO_CAP = 7.5; //Số kênh nhân với 7.5 

const DOANH_NGHIEP_PHI_HOA_DON = 15;
const DOANH_NGHIEP_PHI_CO_BAN = 75; //75$ cho 10 kênh đầu tiên
const DOANH_NGHIEP_PHI_1KENH_KET_NOI_THEM = 5;
const DOANH_NGHIEP_PHI_1KENH_CAO_CAP = 50;


//* Hàm main
function TinhTienCap() {
    var loaiKhachHang = document.querySelector("#txtLoaiKhachHang").value;
    var maKhachHang = document.querySelector("#txtMaKhachHang").value;
    var soKenhCaoCap = document.querySelector("#txtSoKenhCaoCap").value;
    var tienCap = 0;

    if (loaiKhachHang == "1") {
        tienCap = TinhTienCapNhaDan(soKenhCaoCap);
    }
    else if (loaiKhachHang == "2") {
        var soKetNoi = document.querySelector("#txtSoKetNoi").value;
        tienCap = TinhTienCapDoanhNghiep(soKenhCaoCap, soKetNoi);
    }
    else {
        alert("Xin hãy chọn loại khách hàng");
    }
    document.querySelector("#txtKetQua").value = "Mã khách hàng: " + maKhachHang + "; " + "Tiền cáp: $" + new Intl.NumberFormat().format(tienCap);
}

document.querySelector("#btnTinhTien").onclick = TinhTienCap;

function TinhTienCapNhaDan(soKenhCaoCap) {
    return NHA_DAN_PHI_HOA_DON + NHA_DAN_PHI_CO_BAN + NHA_DAN_PHI_1KENH_CAO_CAP * soKenhCaoCap;
}

function TinhTienCapDoanhNghiep(soKenhCaoCap, soKetNoi) {
    if (soKetNoi <= 10) {
        return DOANH_NGHIEP_PHI_HOA_DON + DOANH_NGHIEP_PHI_CO_BAN + DOANH_NGHIEP_PHI_1KENH_CAO_CAP * soKenhCaoCap;
    }
    else if (soKetNoi > 10) {
        return DOANH_NGHIEP_PHI_HOA_DON + DOANH_NGHIEP_PHI_CO_BAN + (soKetNoi - 10) * DOANH_NGHIEP_PHI_1KENH_KET_NOI_THEM + DOANH_NGHIEP_PHI_1KENH_CAO_CAP * soKenhCaoCap;
    }

}