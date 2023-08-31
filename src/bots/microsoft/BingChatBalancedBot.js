import AsyncLock from "async-lock";

import BingChatBot from "./BingChatBot";

export default class BingChatBalancedBot extends BingChatBot {
  static _className = "BingChatBalancedBot"; // Class name of the bot
  static _logoFilename = "bing-balanced-logo.png"; // Place it in public/bots/
  static _model = "galileo"; // Bing styles: h3imaginative, harmonyv3, h3precise
  static _lock = new AsyncLock(); // Must process requests in queue

  static _optionsSets = [
    "nlu_direct_response_filter",
    "deepleo",
    "disable_emoji_spoken_text",
    "responsible_ai_policy_235",
    "enablemm",
    "dv3sugg",
    "machine_affinity",
    "autosave",
    "iyxapbing",
    "iycapbing",
    "galileo",
    "saharagenconv5",
    "fluxhint",
    "glfluxv13",
    "adsredirecturl",
    "agicert",
    "iypapyrus",
    "eredirecturl",
  ];
  static _tone = "Balanced";

  constructor() {
    super();
  }
}
