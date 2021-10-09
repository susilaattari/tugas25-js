function panggilArray(){
    let angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    console.log(`Sebelumnya : ${angka}`);
    angka = angka.sort();
    console.log(`Ascendiing : ${angka}`);
    angka = angka.reverse();
    console.log(`Descending : ${angka}`)
    angka = angka.filter(angka =>{
        return angka > 10
    })
    return angka;
}

console.log(`FIlter > 10 : ${panggilArray()}`)