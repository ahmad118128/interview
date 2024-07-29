/**
 * An array of routes that are accessible to public
 * These routes do not required authentication
 * @type {string[]}
 */
export const publicRoutes = ['/login'];

/**
 * An array of routes that are protected
 * These routes required authentication
 * @type {string[]}
 */

export const protectedRoutes = ['/dashboard', '/'];
