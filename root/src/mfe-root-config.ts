import { registerApplication, start } from "single-spa";

// react
registerApplication({
  name: "@mfe/navbar",
  app: () => System.import("@mfe/navbar"),
  activeWhen: () => true
});

// vue
registerApplication({
  name: "@mfe/checkout",
  app: () => System.import("@mfe/checkout"),
  activeWhen: () => true
});

start({
  urlRerouteOnly: true,
});
