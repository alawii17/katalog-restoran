/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('cancel to like the restaurant', async ({ I }) => {
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

  I.click(likedRestaurantTitle);

  I.waitForElement('#likeButton', 2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.see('Tidak ada restoran yang disukai', '.restaurant-item_not_found');
});
