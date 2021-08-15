//בנפרד למרות שהוצג, לכן הוא מופיע פעמיים brand-הבנתי שצריך להציג את ה
// פעמיים...

class Generator {
    // פונקציה שבוחרת דגם רנדומלי שנמכר בחנות
    public getRandomItem(): Total {
        switch (this.rnd(1, 20)) {
            case 1: return this.getRandomDress();
            case 2: return this.getRandomDressEvening();
            case 3: return this.getRandomBelt();
            case 4: return this.getRandomShirtTshirt();
            case 5: return this.getRandomShirtWomen();
            case 6: return this.getRandomShirtButton();
            case 7: return this.getRandomGlassesSun();
            case 8: return this.getRandomGlassesReading();
            case 9: return this.getRandomHatCasket();
            case 10: return this.getRandomHatBrim();
            case 11: return this.getRandomPantsFabric();
            case 12: return this.getRandomPantsJeans();
            case 13: return this.getRandomPantsShorts();
            case 14: return this.getRandomShoesHeel();
            case 15: return this.getRandomShoesSport();
            case 16: return this.getRandomShoesElegant();
            case 17: return this.getRandomShoesComfort();
            case 18: return this.getRandomSkirt();
            case 19: return this.getRandomJacket();
            case 20: return this.getRandomCoat();
        }
    }

    // פונקציה להגדרת פריטים במערך הקטן
    public getSampleItem(num): Total {
        switch (num) {
            case 1: return this.getRandomDress();
            case 2: return this.getRandomDressEvening();
            case 3: return this.getRandomBelt();
            case 4: return this.getRandomShirtTshirt();
            case 5: return this.getRandomShirtWomen();
            case 6: return this.getRandomShirtButton();
            case 7: return this.getRandomGlassesSun();
            case 8: return this.getRandomGlassesReading();
            case 9: return this.getRandomHatCasket();
            case 10: return this.getRandomHatBrim();
            case 11: return this.getRandomPantsFabric();
            case 12: return this.getRandomPantsJeans();
            case 13: return this.getRandomPantsShorts();
            case 14: return this.getRandomShoesHeel();
            case 15: return this.getRandomShoesSport();
            case 16: return this.getRandomShoesElegant();
            case 17: return this.getRandomShoesComfort();
            case 18: return this.getRandomSkirt();
            case 19: return this.getRandomJacket();
            case 20: return this.getRandomCoat();
        }
    }


    // עבור דגם שנבחר רנדומלית, מוצגת רשימת פונקציות של משתנים הייחודיים לו
    // לצורך הגרלה רנדומלית בהמשך
    private getRandomCoat(): TopGarmentCoat {
        return new TopGarmentCoat(
            this.getRandomManufacturer(),
            this.getRandomModel(),
            this.getRandomPrice(),
            this.getRandomSize(),
            this.getRandomColor(),
            this.getRandomFabricThickness(),
            this.getRandomIsRainCoat()
        );
    }

    private getRandomJacket(): TopGarmentJacket {
        return new TopGarmentJacket(
            this.getRandomManufacturer(),
            this.getRandomModel(),
            this.getRandomPrice(),
            this.getRandomSize(),
            this.getRandomColor(),
            this.getRandomFabricThickness(),
            this.getRandomPocketsNumber()
        );
    }

    private getRandomSkirt(): Skirt {
        return new Skirt(
            this.getRandomManufacturer(),
            this.getRandomModel(),
            this.getRandomPrice(),
            this.getRandomSize(),
            this.getRandomColor(),
            this.getRandomSkirtWidth(),
            this.getRandomSkirtType()
        );
    }

    private getRandomShoesComfort(): ShoesComfort {
        return new ShoesComfort(
            this.getRandomManufacturer(),
            this.getRandomModel(),
            this.getRandomPrice(),
            this.getRandomSize(),
            this.getRandomColor(),
            this.getRandomOrigin(),
            this.getRandomIfLaced(),
            this.getRandomifHasFoothold()
        );
    }

    private getRandomShoesElegant(): ShoesElegant {
        return new ShoesElegant(
            this.getRandomManufacturer(),
            this.getRandomModel(),
            this.getRandomPrice(),
            this.getRandomSize(),
            this.getRandomColor(),
            this.getRandomOrigin(),
            this.getRandomIfLaced(),
            this.getRandomExternalMaterial()
        );
    }

    private getRandomShoesSport(): ShoesSport {
        return new ShoesSport(
            this.getRandomManufacturer(),
            this.getRandomModel(),
            this.getRandomPrice(),
            this.getRandomSize(),
            this.getRandomColor(),
            this.getRandomOrigin(),
            this.getRandomIfLaced(),
            this.getRandomMonth(),
            this.getRandomYear(),

        );
    }

    private getRandomShoesHeel(): ShoesHeel {
        return new ShoesHeel(
            this.getRandomManufacturer(),
            this.getRandomModel(),
            this.getRandomPrice(),
            this.getRandomSize(),
            this.getRandomColor(),
            this.getRandomOrigin(),
            this.getRandomHeelHeight()
        );
    }

    private getRandomPantsShorts(): PantsShorts {
        return new PantsShorts(
            this.getRandomManufacturer(),
            this.getRandomModel(),
            this.getRandomPrice(),
            this.getRandomSize(),
            this.getRandomColor(),
            this.getRandomPantsLengthShorts(),
            this.getRandomTextileType()
        );
    }

    private getRandomPantsJeans(): PantsJeans {
        return new PantsJeans(
            this.getRandomManufacturer(),
            this.getRandomModel(),
            this.getRandomPrice(),
            this.getRandomSize(),
            this.getRandomColor(),
            this.getRandomPantsLength(),
            this.getRandomTorned()
        );
    }

    private getRandomPantsFabric(): PantsFabric {
        return new PantsFabric(
            this.getRandomManufacturer(),
            this.getRandomModel(),
            this.getRandomPrice(),
            this.getRandomSize(),
            this.getRandomColor(),
            this.getRandomPantsLength(),
            this.getRandomPocketsNumber()
        );
    }

    private getRandomShirtWomen(): ShirtWomen {
        return new ShirtWomen(
            this.getRandomManufacturer(),
            this.getRandomModel(),
            this.getRandomPrice(),
            this.getRandomSize(),
            this.getRandomColor(),
            this.getRandomsleeveLength(),
            this.getRandomTextileType()
        );
    }

    private getRandomShirtButton(): ShirtButton {
        return new ShirtButton(
            this.getRandomManufacturer(),
            this.getRandomModel(),
            this.getRandomPrice(),
            this.getRandomSize(),
            this.getRandomColor(),
            this.getRandomsleeveLength(),
            this.getRandomButtonsNumber()
        );
    }

    private getRandomShirtTshirt(): ShirtTshirt {
        return new ShirtTshirt(
            this.getRandomManufacturer(),
            this.getRandomModel(),
            this.getRandomPrice(),
            this.getRandomSize(),
            this.getRandomColor(),
            this.getRandomsleeveLength(),
            this.getRandomShirtPrinted()
        );
    }

    private getRandomDress(): DressCasual {
        return new DressCasual(
            this.getRandomManufacturer(),
            this.getRandomModel(),
            this.getRandomPrice(),
            this.getRandomSize(),
            this.getRandomColor(),
            this.getRandomDressWidth(),
            this.getRandomDressLength(),
            this.getRandombackCutout());
    }

    private getRandomDressEvening(): DressEvening {
        return new DressEvening(
            this.getRandomManufacturer(),
            this.getRandomModel(),
            this.getRandomPrice(),
            this.getRandomSize(),
            this.getRandomColor(),
            this.getRandomDressWidth(),
            this.getRandomDressLength(),
            this.getRandombackCutout(),
            this.getRandomTextileType(),
        );
    }

    private getRandomBelt(): Belt {
        return new Belt(
            this.getRandomManufacturer(),
            this.getRandomModel(),
            this.getRandomPrice(),
            this.getRandomColor(),
            this.getRandomClaspType(),
            this.getRandomClaspColor(),
            this.getRandomLength(),
            this.getRandomWidth(),
            this.getRandomHeigth(),
        );
    }

    private getRandomGlassesSun(): GlassesSun {
        return new GlassesSun(
            this.getRandomManufacturer(),
            this.getRandomModel(),
            this.getRandomPrice(),
            this.getRandomFrameColor(),
            this.getRandomLensColor(),
        );
    }

    private getRandomGlassesReading(): GlassesReading {
        return new GlassesReading(
            this.getRandomManufacturer(),
            this.getRandomModel(),
            this.getRandomPrice(),
            this.getRandomFrameColor(),
            this.getRandomDistance(),
        );
    }

    private getRandomHatCasket(): HatCasket {
        return new HatCasket(
            this.getRandomManufacturer(),
            this.getRandomModel(),
            this.getRandomPrice(),
            this.getRandomDiameter(),
            this.getRandomHasPrint(),
        );
    }

    private getRandomHatBrim(): HatBrim {
        return new HatBrim(
            this.getRandomManufacturer(),
            this.getRandomModel(),
            this.getRandomPrice(),
            this.getRandomDiameter(),
            this.getRandomHatHeight(),
        );
    }



    //  עבור הדגמים אשר נבחרו רנדומלית בשורות 5-28
    //  פונקציות אשר בוחרות ייצוג רנדומלי עבור כל משתנה או מאפיין של הפריט

    private getRandomManufacturer(): Manufacturer {
        switch (this.rnd(1, 7)) {
            case 1: return Manufacturer.DorinFrankfurt;
            case 2: return Manufacturer.Castro;
            case 3: return Manufacturer.Hoodies;
            case 4: return Manufacturer.Adidas;
            case 5: return Manufacturer.Nike;
            case 6: return Manufacturer.Dior;
            case 7: return Manufacturer.Zara;
        }
    }

    private getRandomButtonsNumber(): number {
        return this.rnd(7, 17);
    }

    private getRandomModel(): Model {
        switch (this.rnd(1, 3)) {
            case 1: return Model.BahamasCorals;
            case 2: return Model.OceanicWild;
            case 3: return Model.ShadowedRiver;
        }
    }

    private getRandomPrice(): number {
        return this.rnd(40, 300);
    }

    private getRandomSize(): number {
        return this.rnd(34, 52);
    }

    private getRandomLensColor(): NaturalColor {
        switch (this.rnd(1, 6)) {
            case 1: return NaturalColor.Black;
            case 2: return NaturalColor.Brown;
            case 3: return NaturalColor.Green;
            case 4: return NaturalColor.Blue;
            case 5: return NaturalColor.Red;
            case 6: return NaturalColor.Beige;
        }
    }

    private getRandomFrameColor(): Colors {
        switch (this.rnd(1, 12)) {
            case 1: return Colors.White;
            case 2: return Colors.Black;
            case 3: return Colors.Brown;
            case 4: return Colors.Yellow;
            case 5: return Colors.Green;
            case 6: return Colors.Blue;
            case 7: return Colors.Violet;
            case 8: return Colors.Red;
            case 9: return Colors.Orange;
            case 10: return Colors.Grey;
            case 11: return Colors.Pink;
            case 12: return Colors.Mixed;
        }
    }

    private getRandomColor(): Colors {
        switch (this.rnd(1, 12)) {
            case 1: return Colors.White;
            case 2: return Colors.Black;
            case 3: return Colors.Brown;
            case 4: return Colors.Yellow;
            case 5: return Colors.Green;
            case 6: return Colors.Blue;
            case 7: return Colors.Violet;
            case 8: return Colors.Red;
            case 9: return Colors.Orange;
            case 10: return Colors.Grey;
            case 11: return Colors.Pink;
            case 12: return Colors.Mixed;
        }
    }

    private getRandomDressWidth(): number {
        return this.rnd(40, 60);
    }

    private getRandomDressLength(): number {
        return this.rnd(80, 180);
    }

    private getRandombackCutout(): boolean {
        switch (this.rnd(1, 2)) {
            case 1: return true;
            case 2: return false;
        }
    }

    private getRandomsleeveLength(): number {
        return this.rnd(5, 70);
    }

    private getRandomShirtPrinted(): string {
        switch (this.rnd(1, 5)) {
            case 1: return "'Savanna Cat'";
            case 2: return "'Tropical Rain'";
            case 3: return "'Amazonas Flower'";
            case 4: return "'Evergreen Forest'";
            case 5: return "Without Print";
        }
    }

    private getRandomClaspType(): BeltClaspType {
        switch (this.rnd(1, 4)) {
            case 1: return BeltClaspType.Fabric;
            case 2: return BeltClaspType.Leather;
            case 3: return BeltClaspType.Plastic;
            case 4: return BeltClaspType.Methal;
        }
    }

    private getRandomClaspColor(): NaturalColor {
        switch (this.rnd(1, 6)) {
            case 1: return NaturalColor.Black;
            case 2: return NaturalColor.Brown;
            case 3: return NaturalColor.Green;
            case 4: return NaturalColor.Blue;
            case 5: return NaturalColor.Red;
            case 6: return NaturalColor.Beige;
        }
    }

    private getRandomLength(): number {
        return this.rnd(100, 150);
    }

    private getRandomWidth(): number {
        return this.rnd(2, 3);
    }

    private getRandomHeigth(): number {
        return this.rnd(1, 7);
    }

    private getRandomDistance(): number {
        return this.rnd(30, 60);
    }

    private getRandomTextileType(): TextileType {
        switch (this.rnd(1, 3)) {
            case 1: return TextileType.Cotton;
            case 2: return TextileType.Polyester;
            case 3: return TextileType.Stretch;
        }
    }

    private getRandomDiameter(): number {
        return this.rnd(30, 55);
    }

    private getRandomHasPrint(): boolean {
        switch (this.rnd(1, 2)) {
            case 1: return true;
            case 2: return false;
        }
    }

    private getRandomHatHeight(): number {
        return this.rnd(20, 35);
    }

    private getRandomPantsLength(): number {
        return this.rnd(30, 110);
    }

    private getRandomPantsLengthShorts(): number {
        return this.rnd(30, 40);
    }

    private getRandomPocketsNumber(): number {
        return this.rnd(2, 8);
    }

    private getRandomTorned(): boolean {
        switch (this.rnd(1, 2)) {
            case 1: return true;
            case 2: return false;
        }
    }

    private getRandomOrigin(): Origin {
        switch (this.rnd(1, 3)) {
            case 1: return Origin.Israel;
            case 2: return Origin.USA;
            case 3: return Origin.Italy;
        }
    }

    private getRandomHeelHeight(): HeelHeight {
        switch (this.rnd(1, 3)) {
            case 1: return HeelHeight.Small;
            case 2: return HeelHeight.Medium;
            case 3: return HeelHeight.Height;
        }
    }

    private getRandomIfLaced(): boolean {
        switch (this.rnd(1, 2)) {
            case 1: return true;
            case 2: return false;
        }
    }

    private getRandomMonth() {
        let month = this.rnd(1, 12);
        return month
    }    

    private getRandomYear() {
        let year = this.rnd(2005, 2019);
        return year
    }

    //private getRandomProductionDate() {
    //    let year = this.rnd(2005, 2019);
    //    let month = this.rnd(1, 12);
    //    let date = new Date(year, month);
    //    return date
    //}

    private getRandomExternalMaterial(): ShoeExternalMat {
    switch (this.rnd(1, 3)) {
        case 1: return ShoeExternalMat.Fabric;
        case 2: return ShoeExternalMat.Suede;
        case 3: return ShoeExternalMat.Leather;
    }
}

    private getRandomifHasFoothold(): boolean {
    switch (this.rnd(1, 2)) {
        case 1: return true;
        case 2: return false;
    }
}

    private getRandomSkirtWidth(): number {
    return this.rnd(40, 100);
}

    private getRandomSkirtType(): SkirtType {
    switch (this.rnd(1, 2)) {
        case 1: return SkirtType.Short;
        case 2: return SkirtType.Long;
    }
}
    
    private getRandomFabricThickness(): number {
    return this.rnd(1, 5);
}

    private getRandomIsRainCoat(): boolean {
    switch (this.rnd(1, 2)) {
        case 1: return true;
        case 2: return false;
    }
}


    // פונקציה לבחירת מספר רנדומלי
    private rnd(min: number, max: number): number {
    return min + Math.floor(Math.random() * (max - min + 1));
}
}