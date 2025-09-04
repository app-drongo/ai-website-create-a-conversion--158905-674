import Herobaasplatform from '@/components/Herobaasplatform';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Cta from '@/components/Cta';

export default function BaasPlatformPage() {
  return (
    <main className="min-h-screen">
      <section id="section-0" className="scroll-mt-16">
        <Herobaasplatform />
      </section>
      <section id="section-1" className="scroll-mt-16">
        <Features />
      </section>
      <section id="section-2" className="scroll-mt-16">
        <Pricing />
      </section>
      <section id="section-3" className="scroll-mt-16">
        <Cta />
      </section>
    </main>
  );
}