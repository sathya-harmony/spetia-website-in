import CtaPrimary from '../components/CtaPrimary';
import WorkFilters from '../components/WorkFilters';
import { projects } from '../lib/content';

export const metadata = {
  title: 'Selected Work — Studio Spetia, Bangalore Architects',
  description:
    'Recently completed homes across Sarjapura, Whitefield, Indiranagar, Koramangala, Yelahanka. Architecture and construction by Studio Spetia.',
};

export default function WorkPage() {
  return (
    <>
      <section className="py-24 bg-ivory">
        <div className="max-w-[720px] mx-auto px-4 text-center">
          <h1 className="font-display text-[clamp(2.5rem,8vw,4.5rem)] leading-[1.05] text-ink mb-6">
            Selected work
          </h1>
          <p className="font-body text-[clamp(1rem,2vw,1.125rem)] text-ink-soft">
            Each home is design, structure, interiors, and construction under one Studio Spetia contract. Recently completed homes across Bangalore.
          </p>
        </div>

        <WorkFilters projects={projects} />
      </section>

      <section className="py-24 bg-stone/20">
        <div className="max-w-[720px] mx-auto px-4 text-center">
          <h2 className="font-display text-[clamp(2rem,5vw,3rem)] leading-[1.15] text-ink mb-6">
            Send your plot details
          </h2>
          <p className="font-body text-[clamp(1rem,2vw,1.125rem)] text-ink-soft mb-12 max-w-[480px] mx-auto">
            If you have a plot in Bangalore and you're thinking about building, message us. Sangeetha and Sathya reply personally.
          </p>
          <CtaPrimary page="work" />
        </div>
      </section>
    </>
  );
}
