import { ApplicationInsights } from "@microsoft/applicationinsights-web";

const connectionString = import.meta.env.VITE_CONNECTION_STRING;

const appInsights = new ApplicationInsights({
  config: {
    connectionString: connectionString,
    enableAutoRouteTracking: true
  }
});

appInsights.loadAppInsights();
appInsights.trackPageView();

export default appInsights;