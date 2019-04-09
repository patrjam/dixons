import { getRandom } from "../utils/random";
import MainCategories from "../pages/main-categories.po";
import ComputingSubcategories from "../pages/computing-subcategories.po";
import Products, { ProductDetail } from "../pages/product.po";
import Alerts from "../widgets/alerts";
import Basket from "../pages/basket.po";
import { ENV } from "../enviroment";

const mainCategories = new MainCategories();
const computingSubcategories = new ComputingSubcategories();
const products = new Products();
const productDetail = new ProductDetail();
const alerts = new Alerts();
const basket = new Basket();

const ADDED_TO_BASKET = "Added to your basket";

fixture("DIXONS Automation Test - Buying a product").beforeEach(async t => {
  await t.navigateTo(ENV);
});

test("should add random product from Computing->ipad, tablets & ereaders subcategory", async t => {
  await t

    .hover(mainCategories.computing)
    .expect(computingSubcategories.laptops.exists)
    .ok()

    //check all subcategories
    .expect(computingSubcategories.ipadTabletsEreaders.exists)
    .ok()
    .expect(computingSubcategories.microsoftSurface.exists)
    .ok()
    .expect(computingSubcategories.desktopPCs.exists)
    .ok()
    .expect(computingSubcategories.projectors.exists)
    .ok()
    .expect(computingSubcategories.pcMonitors.exists)
    .ok()
    .expect(computingSubcategories.printersScanersAndInk.exists)
    .ok()
    .expect(computingSubcategories.computerAccessories.exists)
    .ok()
    .expect(computingSubcategories.networking.exists)
    .ok()
    .expect(computingSubcategories.dataStorage.exists)
    .ok()
    .expect(computingSubcategories.componentsAndUpgrades.exists)
    .ok()
    .expect(computingSubcategories.software.exists)
    .ok()
    .expect(computingSubcategories.officeSupplies.exists)
    .ok()
    .expect(computingSubcategories.laptopBagsAndCases.exists)
    .ok()

    .expect(computingSubcategories.allSubcategories.count)
    .eql(14) //14 subcategories in Computing

    .hover(mainCategories.computing)
    .click(computingSubcategories.ipadTabletsEreaders)

    .click(products.productCategoryList.nth(getRandom(6))) //6 categories

    .click(products.productItem.nth(getRandom(20))) //e.g. 20 products

    .click(productDetail.addToBasketButton)
    .expect(alerts.success.exists)
    .ok()
    .expect(productDetail.productTitle.innerText)
    .contains(ADDED_TO_BASKET)
    .expect(basket.badge.count)
    .gte(1); //some products have more parts
});
