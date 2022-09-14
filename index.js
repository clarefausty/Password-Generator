let password = ["efdhsy45BBi", "wfqumghDDlo", "adepfgharJJ", "vxytlibXXky", "crhsdairNNe", "hhyareiyyFF"]
let passwordInput1 = document.getElementById("password-input1")
let passwordInput2 = document.getElementById("password-input2")

generate.addEventListener("click", function() {
    let randomIndex1 = Math.floor(Math.random()*password.length)
    let randomIndex2 = Math.floor(Math.random()*password.length)
    passwordInput1.textContent = password[randomIndex1]
    passwordInput2.textContent = password[randomIndex2]
})
