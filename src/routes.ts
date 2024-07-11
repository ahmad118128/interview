/**
 * An array of routes that are accessible to public
 * These routes do not required authentication
 * @type {string[]}
 */
export const publicRoutes = ['/'];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /dashboard
 * @type {string[]}
 */
export const authRoutes = ['/login'];

/**
 * The default redirect path after logged in
 * @type {string}
 */
export const DASHBOARD = '/dashboard';

/**
 * The default nextjs route
 * @type {string}
 */
export const defaultRoute = '/';
