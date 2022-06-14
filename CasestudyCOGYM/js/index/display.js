//dữ liệu
//list OPPO
new Product("OPPO RENO 7", 10490000,  "../image/oppo1.jpg", "Oppo")
let oppo1 = new Product("OPPO RENO 7", 10490000, "../image/oppo1.jpg", "Oppo")
let oppo2 = new Product("OPPO A55", 4490000, "../image/oppo2.jpg", "Oppo")
let oppo3 = new Product("OPPO RENO 6", 10396000, "../image/oppo3.jpg", "Oppo")
let oppo4 = new Product("OPPO RENO 4", 10490000, "../image/oppo4.jpg", "Oppo")
let oppo5 = new Product("OPPO A95", 6490000, "../image/oppo5.jpg", "Oppo")
let oppo6 = new Product("OPPO FIND X5", 30990000, "../image/oppo6.jpg", "Oppo")
let arrayOppo = [[oppo1, oppo2, oppo3], [oppo4, oppo5, oppo6]];

//list SAMSUNG
new Product("SAMSUNG S22 ULTRA", 30990000, "../image/samsung1.jpg",  "Samsung")
let samsung1 = new Product("SAMSUNG S22 ULTRA", 30990000, "../image/samsung1.jpg",  "Samsung")
let samsung2 = new Product("SAMSUNG GALAXY A03", 2990000, "../image/samsung2.jpg",  "Samsung")
let samsung3 = new Product("SAMSUNG GALAXY A52S", 7990000, "../image/samsung3.jpg", "Samsung")
let samsung4 = new Product("SAMSUNG GALAXY Z FOLD", 36990000, "../image/samsung4.jpg",  "Samsung")
let samsung5 = new Product("SAMSUNG GALAXY S22+", 25990000, "../image/samsung5.jpg",  "Samsung")
let samsung6 = new Product("SAMSUNG GALAXY S22 5G", 21990000, "../image/samsung6.jpg",  "Samsung")
let arraySamsung = [[samsung1, samsung2, samsung3], [samsung4, samsung5, samsung6]];

//list IPHONE

let iphone1 = new Product("IPHONE 11", 13790000, "../image/iphone1.jpg", "Iphone");
let iphone2 = new Product("IPHONE 13 PROMAX", 31990000, "../image/iphone2.jpg", "Iphone");
let iphone3 = new Product("IPHONE 12 PRO 256GB", 28490000, "../image/iphone3.jpg", "Iphone");
let iphone4 = new Product("IPHONE 13 PRO", 28390000, "../image/iphone4.jpg", "Iphone");
let iphone5 = new Product("IPHONE 13", 22390000, "../image/iphone5.jpg", "Iphone");
let arrayIphone = [[iphone1, iphone2, iphone3], [iphone4, iphone5]];

//hàm tạo list
function showElement(array) {
    let content = "<table>";
    for (let i = 0; i < array.length; i++) {
        content += "<tr>";
        for (let j = 0; j < array[i].length; j++) {
            content += "<td>"
            content += "<img  alt='Lỗi' src=" + array[i][j].image + ">"
            content += "<h2>" + array[i][j].name + "</h2>"
            content += "<p>Giá: " + array[i][j].price + " VND</p>"
            if (!checkAdmin()) {
                content += "<button onclick='renderEdit(\"Cập nhật\");editProduct(" + i + "," + j + ',\"' + array[i][j].getCategory() + '"' + ")'>&nbsp;Sửa&nbsp;</button>" + "&emsp;"
                content += "<button onclick='deleteProduct(" + i + "," + j + ',\"' + array[i][j].getCategory() + '"' + ")'>&nbsp;Xóa&nbsp;</button>"
            }
            content += "</td>"
        }
        content += "<tr>"
    }
    content += "</table>"
    document.getElementById("displayElement").innerHTML = content
}

function showOppo() {
    showElement(arrayOppo)
}

function showSamsung() {
    showElement(arraySamsung)
}

function showIphone() {
    showElement(arrayIphone)
}


//kiểm tra xem đã đăng nhập admin hay chưa?
function checkAdmin() {
    let username = localStorage.getItem("username")
    let data = ""
    if (username === null) {
        data += "<div id='admin'><a href='login.html'>Đăng nhập</a></div>"
        document.getElementById("header").innerHTML = data
        return true;
    } else {
        data += "<div id='admin'><p>Tài khoản: " + username + "</p>" +
            "<a onclick='logout()' href='index.html'>Đăng xuất</a></div>"
        document.getElementById("header").innerHTML = data
        return false;
    }
}

function logout() {
    localStorage.clear()
}




