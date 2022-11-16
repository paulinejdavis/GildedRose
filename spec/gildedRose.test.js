
const {Shop, Item} = require("../lib/gildedRose");

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });

  it('quality degrades twice as fast after sell by date', function() {
    const gildedRose = new Shop([new Item('foo', 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(8);
  });
    
  it('quality is never negative', function() {
    const gildedRose = new Shop([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });

  it('Aged Brie increases in quality the older it gets', function() {
    const gildedRose = new Shop([new Item('Aged Brie', 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Aged Brie');
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(11);
  });

  it('quality is never more than 50', function() {
    const gildedRose = new Shop([new Item('Aged Brie', 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Aged Brie');
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(50);
  });

  it('Sulfuras never has to be sold or decreases in quality', function() {
    const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 10, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Sulfuras, Hand of Ragnaros');
    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(80);
  });

  it('Backstage passes increases in quality as its sellIn value approaches', function() {
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(14);
    expect(items[0].quality).toBe(11);
  });

});