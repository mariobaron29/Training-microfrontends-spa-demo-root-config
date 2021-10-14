import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@sofka-technologies/spa-demo-header",
  app: () => System.import("@sofka-technologies/spa-demo-header"),
  activeWhen: ["/"]
});


start({
  urlRerouteOnly: true,
});
