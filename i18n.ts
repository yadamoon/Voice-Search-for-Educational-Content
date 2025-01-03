import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "am"];

export default getRequestConfig(async ({ locale }: { locale: string }) => {
    if (!locales.includes(locale)) {
        notFound();
    }

    return {
        locale, // Explicitly include the locale
        messages: (await import(`./messages/${locale}.json`)).default,
    };
});
