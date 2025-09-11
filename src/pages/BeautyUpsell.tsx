import AnnouncementBar from "@/components/AnnouncementBar";

interface BeautyUpsellProps {
  destinationUrl: string;
}

const BeautyUpsell = ({ destinationUrl }: BeautyUpsellProps) => (
  <div className="min-h-screen bg-background">
    <AnnouncementBar destinationUrl={destinationUrl} />
    <main className="max-w-3xl mx-auto px-4 py-16 text-center">
      <h1 className="news-headline text-4xl mb-4">Essence of Argan Oil</h1>
      <p className="news-body text-lg mb-8">
        Experience luminous skin with our pure, cold-pressed argan oil.
      </p>
      <a href={destinationUrl} className="editorial-cta-large">Claim Your Bottle →</a>
    </main>
  </div>
);

export default BeautyUpsell;

