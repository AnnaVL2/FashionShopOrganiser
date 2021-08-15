

function main() {

    const tester = new Tester();
    tester.test();

}

try {
    main();
}
catch (error) {
    alert("Error: " + error.message);
}


