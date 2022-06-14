function reRender(category) {
    switch (category) {
        case "Oppo": {
            showOppo()
            break
        }
        case "Samsung": {
            showSamsung()
            break
        }
        case "Iphone": {
            showIphone()
            break
        }
    }
}

function deleteProduct(i, j, category) {
    switch (category) {
        case "Oppo": {
            if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + arrayOppo[i][j].getName() + "?")) {
                arrayOppo[i].splice(j, 1)
            }
            break
        }
        case "Samsung": {
            if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + arraySamsung[i][j].getName() + "?")) {
                arraySamsung[i].splice(j, 1)
            }
            break
        }
        case "Iphone": {
            if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + arrayIphone[i][j].getName() + "?")) {
                arrayIphone[i].splice(j, 1)
            }
            break
        }
    }
    reRender(category)
}
