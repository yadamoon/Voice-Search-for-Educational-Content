import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ["en", "am"],
    defaultLocale: "en",
})

export const config = {
    // Skip all paths that should not be internationalized
    matcher: ["/", "/(en|am)/:path*"],
};