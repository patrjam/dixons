import { Selector } from "testcafe";

export default class ComputingSubcategories {
  container = Selector("ul");
  laptops = this.container.find('[title="Laptops"]');
  ipadTabletsEreaders = this.container.find(
    '[title="iPad, Tablets & eReaders"]'
  );
  microsoftSurface = this.container.find('[title="Microsoft Surface"]');
  desktopPCs = this.container.find('[title="Desktop PCs"]');
  projectors = this.container.find('[title="Projectors"]');
  pcMonitors = this.container.find('[title="PC monitors"]');
  printersScanersAndInk = this.container.find(
    '[title="Printers, scanners and ink"]'
  );
  computerAccessories = this.container.find('[title="Computer accessories"]');
  networking = this.container.find('[title="Networking"]');
  dataStorage = this.container.find('[title="Data storage"]');
  componentsAndUpgrades = this.container.find(
    '[title="Components & upgrades"]'
  );
  software = this.container.find('[title="Software"]');
  officeSupplies = this.container.find('[title="Office supplies"]');
  laptopBagsAndCases = this.container.find('[title="Laptop bags and cases"]');

  allSubcategories = this.container.find(
    'li a.chevron[title="Computing"] + ul li a.chevron'
  );
}
