// // routes
// import { PATH_DASHBOARD } from './routes/paths';

// // API
// // ----------------------------------------------------------------------


// export const MAPBOX_API = process.env.MAPBOX;

// // ROOT PATH AFTER LOGIN SUCCESSFUL
// export const PATH_AFTER_LOGIN = PATH_DASHBOARD.general.app; // as '/dashboard/app'

// // LAYOUT
// // ----------------------------------------------------------------------

// export const HEADER = {
//   MOBILE_HEIGHT: 64,
//   MAIN_DESKTOP_HEIGHT: 88,
//   DASHBOARD_DESKTOP_HEIGHT: 92,
//   DASHBOARD_DESKTOP_OFFSET_HEIGHT: 92 - 32,
// };

// export const NAVBAR = {
//   BASE_WIDTH: 260,
//   DASHBOARD_WIDTH: 280,
//   DASHBOARD_COLLAPSE_WIDTH: 88,
//   //
//   DASHBOARD_ITEM_ROOT_HEIGHT: 48,
//   DASHBOARD_ITEM_SUB_HEIGHT: 40,
//   DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32,
// };

// export const ICON = {
//   NAVBAR_ITEM: 22,
//   NAVBAR_ITEM_HORIZONTAL: 20,
// };

// // SETTINGS
// // ----------------------------------------------------------------------

// export const cookiesExpires = 3;

// export const cookiesKey = {
//   themeMode: 'themeMode',
//   themeDirection: 'themeDirection',
//   themeColorPresets: 'themeColorPresets',
//   themeLayout: 'themeLayout',
//   themeStretch: 'themeStretch',
// };

// export const defaultSettings = {
//   themeMode: 'light',
//   themeDirection: 'ltr',
//   themeColorPresets: 'default',
//   themeLayout: 'horizontal',
//   themeStretch: false,
// };
const config = {
  // API configurations
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.arehare.com',
    timeout: 5000, // Timeout for API requests (in milliseconds)
    endpoints: {
      getUser: '/user',
      getOrders: '/orders',
      // Add other API endpoints as needed
    },
  },

  // SEO configurations
  seo: {
    siteName: 'AreHare - Leading Digital Solutions',
    defaultTitle: 'AreHare - Digital Solutions for Your Business',
    defaultDescription:
      'AreHare provides top-notch digital services for businesses worldwide, empowering growth and innovation.',
    defaultOpenGraphImage: '/images/og-image.png',
    twitterHandle: '@arehare_inc',
    siteUrl: 'https://www.arehare.com',
  },

  // App-level settings
  app: {
    themeColor: '#0070f3',
    defaultLanguage: 'en',
  },

  // Google Analytics settings
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || 'UA-XXXXXXXXX-X',
  },

  // Environment settings
  env: {
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
  },

  // Other settings like timeouts, feature flags, etc.
  featureFlags: {
    enableNewFeature: true, // Example feature flag
  },
};

export default config;
