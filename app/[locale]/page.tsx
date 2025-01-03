import Counter from "@/components/Counter";
import SearchByVoice from "@/components/SearchByVoice";
import SpeechToText from "@/components/SpeechToText";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("HomePage");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center py-10 px-4">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          {t("title")}
        </h1>
        <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
          {t("description") || "Search by voice and explore features!"}
        </p>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-10">
        <SearchByVoice />
      </div>

      {/* Uncomment these sections to include additional components */}
      {/* <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-10 mt-6">
        <Counter />
      </div>
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-10 mt-6">
        <SpeechToText />
      </div> */}
    </div>
  );
}
