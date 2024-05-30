/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restoran yang disukai', '.restaurant-item_not_found');

  I.amOnPage('/#/home');

  I.see("Let's Explore", '.button');
  I.click('.button');

  I.waitForElement('.restoran_list');
  I.seeElement('.restoran_list');
  const firstRestaurant = locate('.restoran_list_content a h1.restoran_list_title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurantTitle);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restoran_list');
  const likedRestaurantTitle = await I.grabTextFrom('.restoran_list_content a h1.restoran_list_title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
