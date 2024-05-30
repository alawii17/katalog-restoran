/* eslint-disable no-undef */
Feature('Review Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/home');
});

Scenario('Review One restaurant', async ({ I }) => {
  I.see("Let's Explore", '.button');
  I.click('.button');

  I.waitForElement('.restoran_list');
  I.seeElement('.restoran_list');

  const firstRestaurant = locate('.restoran_list_content a h1.restoran_list_title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurantTitle);

  I.waitForElement('#add-review-form');
  I.seeElement('#add-review-form');

  const name = 'Alawi';
  const reviewText = 'This is a great restaurant!';

  I.fillField('#name', name);
  I.fillField('#review', reviewText);

  I.click('button[type=submit]');

  I.waitForElement('.restoran_detail_review');
  I.seeElement('.restoran_detail_review');

  I.refreshPage();
  I.wait(2);
  I.refreshPage();
  I.wait(2);

  I.see(name, '.restoran_detail_review');
  I.see(reviewText, '.restoran_detail_review');
});
