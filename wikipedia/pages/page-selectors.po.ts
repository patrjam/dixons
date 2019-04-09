import { Selector } from "testcafe";

export default class TitleSpecial {
  random = Selector('[title="Special:Random"]');
}

export class Heading {
  first = Selector("#firstHeading");
}

export class FirstLink {
  withHrefNotSharpNotHelpNotListen = Selector(
    'p a[href]:not([href^="#"]):not([href^="/wiki/Help"]):not([href^="//upload.wikimedia.org"]):link'
  );
}
