import { Selector } from "testcafe";

export default class Products {
  productCategoryList = Selector("#categories .category.count_item");
  productItem = Selector(".product");
}

export class ProductDetail {
  productTitle = Selector(".pageTitle");
  addToBasketButton = Selector('#product-actions [data-component="Button"]');
}
