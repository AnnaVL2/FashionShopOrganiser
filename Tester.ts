
//בנפרד למרות שהוצג, לכן הוא מופיע פעמיים brand-הבנתי שצריך להציג את ה
// פעמיים...

class Tester {

    public test(): void {
        let size: number = +prompt("Please type the size of the array");

        do {
            if (size == undefined || size <= 0) {
                size = +prompt("Illegale number! Please type the size of the array");
            }

        } while (size == undefined || size <= 0);

        const items = new Array<Total>(size);
        const gen = new Generator();


        if (size <= 20) {
            let smallArray = new Array<Total>(size);

            for (let i = 0; i < smallArray.length; i++) {
                smallArray[i] = gen.getSampleItem(i + 1);
            }

            for (let i = 0; i < smallArray.length; i++) {
                smallArray[i].displayDetails();
                if (smallArray[i] instanceof Belt) {
                    document.write("Brand: " + smallArray[i].displayBrand() + ", Clasp color: " + (smallArray[i] as Belt).claspColor + "<br>");
                }
                else {
                    document.write("Brand: " + smallArray[i].displayBrand() + "<br>");
                }
                document.write("<hr>");
            }
        }

        else {

            for (let i = 0; i < items.length; i++) {
                items[i] = gen.getRandomItem();
            }

            for (let i = 0; i < items.length; i++) {
                items[i].displayDetails();
                if (items[i] instanceof Belt) {
                    document.write("Brand: " + items[i].displayBrand() + ", Clasp color: " + (items[i] as Belt).claspColor + "<br>");
                }
                else {
                    document.write("Brand: " + items[i].displayBrand() + "<br>");
                }
                document.write("<hr>");
            }
        }
    }
}



