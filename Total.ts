// מחלקה זו מאחדת את המאפיינים שמשותפים 
// לכל המחלקות של לבוש ואקססורי

abstract class Total {
    public manufacturer: Manufacturer;
    public model: Model;
    private _price: number;

    public constructor(manufacturer: Manufacturer, model: Model, price: number) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.price = price;
    }

    public get price(): number {
        return this._price;
    }

    public set price(value: number) {
        if (value < 1 || value > 300) {
            throw new Error("Illegal prise! Please enter prise 1 to 300 NIS.");
        }
        this._price = value;
    }




    public displayBrand(): string {
        return this.manufacturer + "/ " + this.model;
    }

    public displayManufacturer(status: Manufacturer): void {
        switch (status) {
            case Manufacturer.DorinFrankfurt: document.write("Manufacturer: DORIN FRANKFURT <br>");
                break;
            case Manufacturer.Castro: document.write("Manufacturer: CASTRO <br>");
                break;
            case Manufacturer.Hoodies: document.write("Manufacturer: HOODIES <br>");
                break;
            case Manufacturer.Adidas: document.write("Manufacturer: ADIDAS <br>");
                break;
            case Manufacturer.Nike: document.write("Manufacturer: NIKE <br>");
                break;
            case Manufacturer.Dior: document.write("Manufacturer: DIOR <br>");
                break;
            case Manufacturer.Zara: document.write("Manufacturer: ZARA <br>");
                break;
        }
    }

    public displayModel(status: Model): void {
        switch (status) {
            case Model.BahamasCorals: document.write("Model: 'Bahamas Corals' <br>");
                break;
            case Model.OceanicWild: document.write("Model: 'Oceanic Wild' <br>");
                break;
            case Model.ShadowedRiver: document.write("Model: 'Shadowed River' <br>");
                break;
        }
    }


    public getPriceWithoutVat(price): string {
        return (price / 1.17).toFixed(2);
    }

    abstract displayImage();

    public displayDetails() {
        this.displayManufacturer(this.manufacturer);
        this.displayModel(this.model);
        document.write(`Price: ${this.price} NIS <br>`);
        document.write(`Price VAT not included: ${this.getPriceWithoutVat(this.price)} NIS <br>`);
        this.displayBrand();
    }
}