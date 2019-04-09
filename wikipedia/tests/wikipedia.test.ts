import TitleSpecial, { Heading, FirstLink } from "../pages/page-selectors.po";
import { WIKI_ENV } from "../enviroment";
const { log } = console;

const titleSpecial = new TitleSpecial();
const heading = new Heading();
const firstLink = new FirstLink();

const PHILOSOPHY = "Philosophy";

fixture("DIXONS Automation Test - Wikipedia").beforeEach(async t => {
  await t.navigateTo(WIKI_ENV);
});

test("should find philosophy page", async t => {
  await t.click(titleSpecial.random);
  let counter = 0;

  while ((await heading.first.innerText) !== PHILOSOPHY) {
    counter++;

    await t.click(firstLink.withHrefNotSharpNotHelpNotListen);

    log("Number of redirects/transitions: " + counter);
  }
});
