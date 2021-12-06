let iframe = document.getElementsByTagName("iframe")
let site = ""

function iniciar(numPag) {
    switch (numPag) {
        case 1: // geometria
            site = "https://docs.google.com/forms/d/e/1FAIpQLSfdrlhXjRnHDHHkFHkEI_Kn4LvU9eZvrrAXQdDPtVa53Pm2KA/viewform?embedded=true"    
            break;

        case 2: // probabilidade
            site = "https://docs.google.com/forms/d/e/1FAIpQLSc_aZ7VSKMhIQGsDBaGXozDBcUAZNfkG6pikA5nx-4I01zBvA/viewform?embedded=true"    
            break;
        
        case 3: // análise combinatória
            site = "https://docs.google.com/forms/d/e/1FAIpQLSerYNti5pTANWLFNt_n88dNG7rGg2YaHncEhjOeq_crWj8MAA/viewform?embedded=true"    
            break;

        case 4:
            site = "https://docs.google.com/forms/d/e/1FAIpQLSf18dWTULdXw2Yzwp7auIV_UMxIgcZRIVqee4Os7DktbtebCg/viewform?embedded=true"
            break;
    
        default:
            break;
    }

    iframe[0].setAttribute("src", `${site}`)

    console.log("Apareci!!!")
}

function parar() {
    iframe[0].setAttribute("src", "")

    console.log("Sumi!!!")
}
