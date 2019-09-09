 import { HungryBear } from './../src/bear-game.js';

 describe('HungryBear', function() {
   let fuzzy

   beforeEach(function() {
     fuzzy  = new HungryBear("Fuzzy");
     jasmine.clock().install();
     fuzzy.setHunger();
   });
   afterEach(function() {
     jasmine.clock().uninstall();
   });

   // it('should have a name and a food level of 10 when it is created', function() {
   //   expect(fuzzy.name).toEqual("Fuzzy");
   //   expect(fuzzy.foodLevel).toEqual(10);
   // });
   //
   //
   // it('should have a food level of 7 after 3001 milliseconds', function() {
   //   jasmine.clock().tick(3001);
   //   expect(fuzzy.foodLevel).toEqual(7);
   // });
   //
   // it('should get very hungry if the food level drops below zero', function() {
   //   fuzzy.foodLevel = 0;
   //   expect(fuzzy.didYouGetEaten()).toEqual(true);
   // });
   //
   // it('should get very hungry if 10 seconds pass without feeding', function() {
   //   jasmine.clock().tick(10001);
   //   expect(fuzzy.didYouGetEaten()).toEqual(true);
   // });
   //
   // it('should have a food level of ten if it is fed', function() {
   //   // let fuzzy = new HungryBear("Fuzzy");
   //   jasmine.clock().tick(9001);
   //
   //   fuzzy.feed();
   //   console.log(this.foodLevel);
   //   expect(fuzzy.foodLevel).toEqual(10);
   // });

   it('should not let you feed bear if you are eaten', function () {
    // let fuzzy = new HungryBear("Fuzzy");
     jasmine.clock().tick(10001);
     fuzzy.feed();
     console.log(fuzzy.foodLevel);
     expect(fuzzy.foodLevel).toEqual(0);
   });

 });
