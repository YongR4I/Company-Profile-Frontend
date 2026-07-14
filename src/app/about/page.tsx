import HeroHeader from '@/components/shared/HeroHeader';
import Mission from '@/components/sections/about/Mission';
import Process from '@/components/sections/about/Process';
import Partners from '@/components/shared/Partners';
import CTA from '@/components/shared/CTA';
import { getAboutPage } from '@/lib/strapi-services';

export default async function AboutPage() {
  const aboutData = await getAboutPage();


  return (
    <div className="flex flex-col min-h-screen bg-water-900">
      <HeroHeader
        title={
          <>
            About <span className="text-water-300">Sabiru</span>
          </>
        }
        subtitle={aboutData?.heroSubtitle || 'Who Are We'}
      />
      <Mission label={aboutData?.missionLabel} text={aboutData?.missionText} />
      <Process
        label={aboutData?.processLabel}
        steps={aboutData?.processSteps}
      />
      <Partners />
      <CTA />
    </div>
  );
}
