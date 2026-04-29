import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import SchemaOrg from '@/components/SchemaOrg';
import { Card, CardContent } from '@/components/ui/Card';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import { hreflangForEn } from '@/lib/hreflang';

export const metadata = {
  title: 'Team Building in Padua: the Best Outdoor and Indoor Activities | La Montecchia Green',
  description:
    'Complete guide to team building in Padua: outdoor activities in the Euganean Hills, corporate golf, cooking classes, wine tasting and exclusive venues for corporate events. Discover the best locations.',
  alternates: hreflangForEn('/en/blog/team-building-padua'),
};

export default function TeamBuildingPaduaPage() {
  return (
    <div>
      <SchemaOrg
        variant="blogPosting"
        lang="en"
        blogPost={{
          title: 'Team Building in Padua: the Best Outdoor and Indoor Activities',
          description:
            'Complete guide to team building in Padua: outdoor activities in the Euganean Hills, corporate golf, cooking classes, wine tasting and exclusive venues for corporate events.',
          url: 'https://www.lamontecchiagreen.it/en/blog/team-building-padua',
          datePublished: '2026-03-28',
          dateModified: '2026-03-28',
          image: 'https://www.lamontecchiagreen.it/images/chef-preparing-a-dish.jpg',
        }}
      />
      <SchemaOrg
        variant="breadcrumb"
        lang="en"
        breadcrumbItems={[
          { name: 'Home', url: 'https://www.lamontecchiagreen.it/en' },
          { name: 'Blog', url: 'https://www.lamontecchiagreen.it/en/blog' },
          { name: 'Team Building in Padua', url: 'https://www.lamontecchiagreen.it/en/blog/team-building-padua' },
        ]}
      />

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative min-h-[52vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_IMAGES.eventi}
            alt="Corporate team building in the green setting of Golf della Montecchia near Padua"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-cream/95" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-warm-white max-w-3xl">
              Team Building in Padua: the Best Outdoor and Indoor Activities
            </h1>
            <div className="mt-2 text-xs font-medium uppercase tracking-wider text-text-mid/85">
              <time dateTime="2026-03-18">March 18, 2026</time>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ARTICLE ─────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <article className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              Team building has become an essential tool for companies that want to strengthen bonds
              between colleagues, improve internal communication and stimulate creativity. But choosing
              the right activity and the right venue can make the difference between a forgettable event
              and an experience that truly leaves a mark. Padua and the Euganean Hills offer an
              extraordinary range of possibilities, thanks to the combination of nature, culinary
              culture and high-quality facilities. In this guide we explore the most effective types of
              team building, the advantages of outdoor activities and the best locations to organise
              your next corporate event.
            </p>
          </Reveal>

          {/* ── Why team building ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              Why Invest in Team Building
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              A company is made of people, and the way those people interact determines the quality of
              work and results. Team building is not simply a recreational break: it is a strategic
              investment that produces tangible benefits. Recent studies show that companies which
              regularly organise team building activities see productivity increases of up to 25 per
              cent, reduced staff turnover and a significant improvement in workplace morale.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              Group activities help break down hierarchical barriers, encourage mutual understanding
              between colleagues from different departments and create shared memories that strengthen
              the sense of belonging. In a working context increasingly fragmented by remote work and
              virtual meetings, in-person team building represents a valuable opportunity to rebuild
              authentic relationships and motivate the team.
            </p>
          </Reveal>

          {/* ── Outdoor vs indoor ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              Advantages of Outdoor Activities over Indoor Ones
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              Outdoor team building activities offer unique advantages compared to those held indoors.
              Contact with nature reduces stress, stimulates creativity and encourages a positive state
              of mind that makes people more open to collaboration. A green lawn, the fresh air of the
              Euganean Hills, the silence broken only by birdsong: these are elements that transform a
              simple group exercise into a regenerating experience.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              Outdoor activities also allow the use of larger spaces, ideal for big groups, and make
              it possible to propose physical challenges that engage the body as well as the mind. This
              type of complete involvement is particularly effective at creating strong, lasting bonds
              among participants. A golf course, a nature park or a country estate becomes the perfect
              stage for experiences that combine fun, healthy competition and team spirit.
            </p>
          </Reveal>

          {/* ── Types of team building ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              Types of Team Building: from Golf to Cooking Classes
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              In and around Padua, the possibilities are many. Corporate golf is one of the most
              popular options among executives and management teams. You do not need to be an
              experienced player: introductory formats allow everyone to approach the sport in a fun way,
              learning the basics under the guidance of a professional instructor. Golf teaches
              concentration, patience and respect for the rules &mdash; values that transfer naturally
              to the workplace.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              Green activities include sustainable outdoor pursuits such as orienteering in the Euganean
              Hills, guided nature walks, gardening workshops and sensory trails through the vineyards.
              These experiences are particularly suited to companies focused on sustainability and
              employee wellbeing.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              Cooking classes are an engaging and inclusive alternative: cooking together under the
              guidance of a professional chef creates complicity and fun, and the final result &mdash; a
              lunch or dinner prepared with your own hands &mdash; becomes a moment of genuine sharing.
              Cooking classes using zero-kilometre produce and traditional Veneto recipes add a cultural
              dimension to the experience.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              Finally, wine tasting is an elegant and refined activity that combines wine culture,
              guided tasting and socialisation. In the Colli Euganei DOC area, where outstanding wines
              such as Fior d&apos;Arancio, Moscato and full-bodied reds are produced, a corporate tasting
              becomes a sensory journey through the territory.
            </p>
          </Reveal>

          {/* ── Where in Padua ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              Where to Organise a Team Building Event in Padua
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              The choice of venue is as crucial as the choice of activity. The best team building venues
              combine spacious and versatile areas, an outstanding landscape setting, quality catering
              services and the logistics needed to manage corporate groups. Padua offers a range of
              options, from historic Venetian villas to nature parks, from agriturismos to sports
              facilities set in green surroundings.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              An often-underestimated factor is ease of access: ample free parking, proximity to
              motorway exits, reachability from the city centre in just a few minutes. These practical
              details make a real difference when organising an event for 20, 50 or 100 people. The
              area between Selvazzano Dentro and the Euganean Hills proves particularly strategic:
              just 10 minutes from central Padua, it offers the advantage of a natural setting without
              the drawback of distance.
            </p>
          </Reveal>

          {/* ── La Montecchia Green ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              Team Building at Golf della Montecchia
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              La Montecchia Green, inside Golf della Montecchia in Selvazzano Dentro, is one of the most
              complete team building locations in the province of Padua. The facility boasts a 27-hole
              golf course set in the Euganean Hills landscape, spacious green areas for group activities,
              a panoramic terrace with views of the hills and a restaurant led by chef Enrico Ruggin.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              The team building formats available range from introductory golf days to cooking classes
              featuring garden-fresh produce and traditional Veneto recipes, from Tenuta Emo Capodilista
              wine tastings to outdoor green activities. Every event can be tailored to the number of
              participants, the company&apos;s objectives and the available budget.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              After the activities, lunch or an aperitivo on the terrace overlooking the Euganean Hills
              is the perfect way to round off the day. Free and ample parking makes logistics easy even
              for large groups, while the proximity to Padua means participants can reach the venue in
              just a few minutes and return comfortably at the end of the day.
            </p>
          </Reveal>

          {/* ── Tips ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              Tips for Organising a Successful Team Building Event
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              To get the most out of your corporate event, plan well in advance and involve participants
              in choosing the activity. Allow a mix of structured moments and free time, so that
              relationships can develop naturally. Choose a venue that offers flexibility in both space
              and catering, enabling you to adapt the programme to the group&apos;s needs. Above all,
              remember that the most effective team building is one where people genuinely enjoy
              themselves: a beautiful setting, an engaging activity and a good meal together achieve
              more than any forced exercise ever could.
            </p>
          </Reveal>

          {/* ── CTA ── */}
          <Reveal>
            <Card className="mt-10 border-green-dark/20 bg-cream/50">
              <CardContent className="p-6">
                <p className="text-base leading-relaxed text-text-mid">
                  Planning a team building event in Padua? Discover our packages and available spaces
                  on the{' '}
                  <Link href="/en/eventi-aziendali" className="font-medium text-green-dark underline">
                    corporate events page
                  </Link>
                  , or contact us for a personalised quote.
                </p>
              </CardContent>
            </Card>
          </Reveal>

          {/* ── Back link ── */}
          <Reveal>
            <div className="mt-10">
              <Link href="/en/blog" className="text-sm font-medium text-green-dark hover:underline">
                &larr; Back to blog
              </Link>
            </div>
          </Reveal>
        </article>
      </section>
    </div>
  );
}
