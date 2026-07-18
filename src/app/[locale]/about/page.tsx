import { getTranslations } from "next-intl/server";
import HeroHeader from '@/components/shared/HeroHeader';
import Mission from '@/components/sections/about/Mission';
import Process from '@/components/sections/about/Process';
import Partners from '@/components/shared/Partners';
import CTA from '@/components/shared/CTA';
import { getAboutPage } from '@/lib/strapi-services';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  const aboutData = await getAboutPage(locale);

  return (
    <div className="flex flex-col min-h-screen bg-water-900">
      <HeroHeader
        title={
          <>
            {t("heroTitle")}
          </>
        }
        subtitle={aboutData?.heroSubtitle || t("heroSubtitle")}
      />
      <Mission label={aboutData?.missionLabel} text={aboutData?.missionText} locale={locale} />
      <Process
        label={aboutData?.processLabel}
        steps={aboutData?.processSteps}
        locale={locale}
      />
      <Partners locale={locale} />
      <CTA locale={locale} />
    </div>
  );
}
