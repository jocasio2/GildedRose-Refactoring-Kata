const {Shop, Item} = require("../src/gilded_rose");
let gildedRose, item1, item2, item3, item4;

describe("Gilded Rose", () => {
  beforeEach(() => {
   gildedRose = new Shop();

   item1 = new Item ("fixme", 10, 55)
   item2 = new Item ("healing", 12, 0)
   item3 = new Item ('healing', 0, 51)
   item4 = new Item ('strength', 0, 7)


   gildedRose.shopItems.push(item1, item2, item3, item4)

  })

  it("should decrease quality of a particular item", function() {

    expect(gildedRose.decreaseQuality("healing")).toBe(50);

  });

  it("should increase quality of a item with quality less than 50", function() {
    
    expect(gildedRose.increaseQuality("strength")).toBe(8);
    
  });
  
  
 
});
