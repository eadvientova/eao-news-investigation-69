import { useEffect, useState } from "react";
import dermatologistRealistic from "@/assets/dermatologist-realistic.jpg";
const heroImage = dermatologistRealistic;

const Index = ({destinationUrl}) => {
  const [orderCount, setOrderCount] = useState(137);
  const [currentTickerIndex, setCurrentTickerIndex] = useState(0);

  // Sidebar sticky management handled via CSS
  
  const tickerMessages = [
    "BREAKING: Essence of Argan Oil Outsells Botox Nationwide",
    "ALERT: Overnight Argan Oil Results Stun Dermatologists",
    "TRENDING: Essence of Argan Oil Ignites Wrinkle-Free Craze",
    "EXCLUSIVE: Moroccan Argan Oil Stock Plummets After Surge",
    "URGENT: Claim Essence of Argan Oil Before Supplies Vanish"
  ];

  useEffect(() => {
    // Simulate live counter updates
    const interval = setInterval(() => {
      setOrderCount(prev => prev + Math.floor(Math.random() * 3));
    }, 45000);
    
    // Rotate ticker messages
    const tickerInterval = setInterval(() => {
      setCurrentTickerIndex(prev => (prev + 1) % tickerMessages.length);
    }, 4000);
    
    return () => {
      clearInterval(interval);
      clearInterval(tickerInterval);
    };
  }, [tickerMessages.length]);


  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Breaking News Ticker */}
      <div className="breaking-ticker">
        <div className="ticker-content">
          {tickerMessages.map((message, index) => (
            <span key={index} className="ticker-item">{message}</span>
          ))}
          {/* Duplicate for seamless loop */}
          {tickerMessages.map((message, index) => (
            <span key={`dup-${index}`} className="ticker-item">{message}</span>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="news-headline text-4xl md:text-5xl lg:text-6xl font-bold text-news-text mb-4">
            Breaking: Essence of Argan Oil Outsells Botox—Derms Panic!
          </h1>
          <p className="news-subhead text-xl md:text-2xl text-news-muted mb-6">
            Fox Lifestyle Exclusive: Essence of Argan Oil Wipes Wrinkles Overnight
          </p>
          <div className="relative w-full max-w-4xl mx-auto">
            <img
              src={heroImage}
              alt="Dermatologist stunned by Essence of Argan Oil's wrinkle reversal"
              className="hero-image rounded-lg shadow-lg"
              fetchPriority="high"
              loading="eager"
              width="1200"
              height="675"
            />
            <p className="text-sm text-news-muted mt-2 italic">Skin specialist shocked as Essence of Argan Oil outperforms Botox</p>
          </div>

          {/* First CTA */}
          <div className="text-center mt-6">
            <a href={destinationUrl} className="editorial-cta-large">
              🔥 Get Essence of Argan Oil—Wrinkles Gone Tonight →
            </a>
          </div>
        </div>

        {/* Live FOMO Counter */}
        <div className="text-center mb-8">
          <div className="fomo-counter mx-auto">
            ⚡ {orderCount} readers ordered today
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 max-w-none mx-auto px-4">
          
          {/* Main Article Column */}
          <div className="lg:col-span-2">
            
            {/* Opening Story */}
            <div className="mb-8">
              <p className="news-body text-lg mb-4">
                BREAKING: Five jars are cancelled—Essence of Argan Oil erases wrinkles overnight and leaves Botox shaking.
              </p>

              <p className="news-body text-lg mb-4">
                Reporters are calling <strong>Essence of Argan Oil</strong> the 100% natural, all-in-one formula that replaces them all—could this be the last product you'll ever need?
              </p>

              <div className="editorial-cta inline-block mb-6">
                <a href={destinationUrl} className="editorial-cta-large">
                  Breaking News Pick: Try Essence of Argan Oil Before It's Gone →
                </a>
              </div>

              <div className="fomo-box">
                <p className="text-sm font-semibold mb-2">⚠️ Stock Alert</p>
                <p className="text-sm">Only 2 bottles per customer due to overwhelming demand. Just restocked after 3 sellouts this year.</p>
              </div>

              <p className="news-body text-lg mb-6">
                This dermatologist-approved oil is already creating buzz across beauty forums for its ability to:
              </p>

              <ul className="list-disc list-inside space-y-2 mb-8 text-lg">
                <li>Smooth wrinkles & fine lines (without harsh retinol)</li>
                <li>Fade dark circles & neck lines</li>
                <li>Erase age spots & sun damage</li>
                <li>Plump & nourish skin on the face, neck, and arms</li>
                <li>Deliver all-day hydration & a radiant glow</li>
              </ul>
            </div>

            {/* Product Image with Caption */}
            <div className="image-container">
              <a href={destinationUrl}>
                <img
                  src="/lovable-uploads/57ec8d87-4b32-47a3-956b-b364ec7b99de.png"
                  alt="Essence of Argan Oil amber bottle with golden glow showing pure Moroccan formula"
                  className="image-responsive max-w-md w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                  loading="lazy"
                  width="400"
                  height="400"
                />
              </a>
              <p className="text-sm text-news-muted mt-3 italic">The breakthrough Essence of Argan Oil that's selling out nationwide</p>

              {/* Inline CTA */}
              <div className="mt-6">
                <a href={destinationUrl} className="editorial-cta">
                  Try Risk-Free Today →
                </a>
              </div>
            </div>

            {/* Why Experts Section */}
            <div className="mb-8">
              <h2 className="news-headline text-3xl font-bold mb-4">Experts Panic: Essence of Argan Oil Named the “Holy Grail of Anti-Aging”</h2>

              <p className="news-body text-lg mb-4">
                Retinol once ruled wrinkle relief, but dermatologists warn it often leaves skin peeling, irritated, and red.
              </p>

              <p className="news-body text-lg mb-4">
                Breaking: Essence of Argan Oil fuses pure Moroccan argan with Retinol, Matrixyl®, Aquaxyl™, and next-gen peptides to boost collagen, seal hydration, and wipe wrinkles overnight.
              </p>

              <div className="pull-quote-large">
                “Botox can’t keep up—Essence of Argan Oil feeds skin while erasing lines,” warns one dermatologist.
              </div>
            </div>
            {/* Media Mentions */}
            <section className="mb-8">
              <div className="max-w-2xl mx-auto text-center">
                <a href={destinationUrl}>
                  <img
                    src="/lovable-uploads/293384da-8bb8-4f21-a4b1-3eb5cf0b28bf.png"
                    alt="As seen in Women's Health, The Dr. Oz Show, OK!, Vogue, Elle, and InStyle magazine logos"
                    className="mx-auto w-full max-w-md h-auto cursor-pointer hover:opacity-90 transition-opacity"
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                </a>
              </div>
            </section>
            {/* Clinical Results */}
            <section className="mb-8">
              <h2 className="news-headline text-3xl font-bold text-center text-[#22A152] mb-2">
                Clinical Shock Proves Argan Oil Erases Years in 28 Days
              </h2>
              <p className="text-center text-news-muted mb-6">
                Independent trials reveal Essence of Argan Oil wipes out years of damage in just four weeks.
              </p>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                {[
                  {
                    title: 'Eye Area',
                    stat: "67% reduction in crow's feet",
                    img: 'https://idro.vouue.com/lovable-uploads/82a086d7-78a5-438b-944c-2c5a90641034.png',
                    alt: "Before and after of eye area showing fewer crow's feet",
                  },
                  {
                    title: 'Nasolabial Folds',
                    stat: '58% reduction in smile lines',
                    img: 'https://idro.vouue.com/lovable-uploads/61df6848-20ff-4902-8965-e92df230b702.png',
                    alt: 'Before and after of nasolabial folds',
                  },
                  {
                    title: "Crow's Feet",
                    stat: '59% reduction in fine lines',
                    img: 'https://idro.vouue.com/lovable-uploads/962d3867-0231-4910-aa28-05f9644d96e3.png',
                    alt: "Closeup showing crow's feet improvement",
                  },
                  {
                    title: 'Overall Complexion',
                    stat: '73% improvement in skin tone',
                    img: 'https://idro.vouue.com/lovable-uploads/76e19f87-0866-485a-af6c-ea5b259e69ec.png',
                    alt: 'Face showing overall complexion improvement',
                  },
                  {
                    title: 'Facial Radiance',
                    stat: '65% improvement in brightness',
                    img: 'https://idro.vouue.com/lovable-uploads/234c02bd-e749-482b-88ab-afc4e01f84d0.png',
                    alt: 'Before and after of facial radiance',
                  },
                  {
                    title: 'Neck & Jawline',
                    stat: '58% reduction in neck lines',
                    img: 'https://idro.vouue.com/lovable-uploads/a477b904-f3b7-4f83-ba4f-1a96f86f3907.png',
                    alt: 'Neck and jawline showing smoother skin',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="border-2 border-[#22A152] rounded-lg bg-white flex flex-col overflow-hidden min-h-[280px]"
                  >
                    <div className="p-3 text-center flex-shrink-0">
                      <h3 className="text-lg font-bold text-[#22A152] mb-1 leading-tight">{item.title}</h3>
                      <p className="text-xs text-news-muted">{item.stat}</p>
                    </div>
                    <div className="flex-1 flex items-center justify-center overflow-hidden">
                      <a href={destinationUrl}>
                        <img
                          src={item.img}
                          alt={item.alt}
                          className="w-full h-32 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                          loading="lazy"
                        />
                      </a>
                    </div>
                    <div className="p-2 text-center flex-shrink-0">
                      <span className="inline-block bg-[#22A152] text-white text-xs font-semibold px-2 py-1 rounded leading-tight">
                        Clinical Study Result
                        <span className="block text-[10px] font-normal">28-day treatment result</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-[#22A152]/10 rounded-lg p-6 mt-8">
                <h3 className="text-2xl font-bold text-center text-[#22A152] mb-4">
                  VERIFIED BY EXPERTS: JOURNAL CONFIRMS ARGAN OIL BEATS BOTOX
                </h3>
                <p className="text-center text-news-muted mb-6">
                  Published in the International Journal of Cosmetic Science and backed by independent dermatologists,
                  Essence of Argan Oil wipes wrinkles in record time.
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { stat: '28', label: 'Days Until Wrinkles Vanish' },
                    { stat: '120', label: 'Derm-Verified Testers' },
                    { stat: '98%', label: 'Saw Younger Skin' },
                  ].map((d) => (
                    <div key={d.label} className="bg-white rounded-lg p-4 text-center shadow">
                      <div className="text-3xl font-bold text-[#22A152]">{d.stat}</div>
                      <div className="text-sm text-news-muted">{d.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Dermatologist Image */}
            <div className="mb-8">
              <a href={destinationUrl}>
                <img
                  src={dermatologistRealistic}
                  alt="Professional dermatologist examining skincare products in clinical setting"
                  className="w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                  loading="lazy"
                  width="1000"
                  height="600"
                />
              </a>
              <p className="text-sm text-news-muted mt-2 italic">Dr. Sarah Mitchell examines the breakthrough peptide formula in her Beverly Hills clinic</p>

              {/* Mid-article CTA */}
              <div className="text-center mt-6 mb-8">
                <a href={destinationUrl} className="editorial-cta-success">
                  Dermatologist Recommended - Order Now →
                </a>
              </div>
            </div>

            {/* Morning Night Section */}
            <div className="mb-8">
              <h2 className="news-headline text-3xl font-bold mb-4">Morning. Night. Even On Your Hands.</h2>
              
              <p className="news-body text-lg mb-4">
                Unlike single-use creams, Essence of Argan Oil replaces every product in your routine:
              </p>

              <ul className="news-body list-disc list-inside space-y-2 mb-6">
                <li>
                  <strong>Morning Routine</strong> – Revitalizes skin for the day ahead, leaving a natural glow.
                </li>
                <li>
                  <strong>Night Routine</strong> – Works while you sleep, delivering visible improvements in weeks.
                </li>
                <li>
                  <strong>Body Care</strong> – Targets age spots, crepey neck skin, and dryness on arms or hands.
                </li>
              </ul>

              <p className="news-body text-lg mb-6 font-semibold">
                That means no more cluttered bathroom shelves, no more 5-step routines. Just one oil that does it all.
              </p>

              <div className="scarcity-alert mb-6">
                <p className="font-semibold mb-2">⏰ Limited Time: Special Editorial Pricing</p>
                <p className="text-sm">Our readers get exclusive access to discounted pricing - but only while supplies last.</p>
              </div>

              <div className="editorial-cta inline-block mb-6">
                <a href={destinationUrl} className="editorial-cta-large">
                  See Before & After Photos →
                </a>
              </div>
            </div>

            {/* Before After Image */}
            <div className="comparison-box">
              <h3 className="text-xl font-bold mb-6 text-center">Dramatic Results in Just 4 Weeks</h3>
              <div className="image-container">
                <a href={destinationUrl}>
                  <img
                    src="/lovable-uploads/0ed2da4a-c6d4-408d-b79a-6701d3b1d4fc.png"
                    alt="Before and after comparison showing Essence of Argan Oil results with dramatic reduction in fine lines and improved skin texture"
                    className="image-responsive max-w-2xl w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                    loading="lazy"
                    width="800"
                    height="800"
                  />
                </a>
                <p className="text-sm text-news-muted italic mt-3">Real results: Dramatic improvement in fine lines and skin texture after 4 weeks of daily use</p>
              </div>
              <div className="text-center mt-6">
                <a href={destinationUrl} className="editorial-cta-urgent">
                  ⚡ Limited Stock - Order Before It's Gone →
                </a>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 self-start">
            <div className="lg:sticky lg:bottom-0">
              {/* Quick Facts Widget */}
              <div className="sidebar-widget">
                <div className="editor-pick mb-4">Breaking News Pick</div>
                <h3 className="news-subhead text-xl font-bold mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-sm">
                  <li><strong>Formula:</strong> Retinol + Caviar + Pure Argan Oil</li>
                  <li><strong>Results:</strong> Visible in 2-4 weeks</li>
                  <li><strong>Use:</strong> Morning & Night</li>
                  <li><strong>Safe for:</strong> All skin types</li>
                  <li><strong>No:</strong> Parabens, sulfates</li>
                  <li><strong>Targets:</strong> Crow's feet, neck creases & age spots overnight</li>
                </ul>
              </div>

              {/* Newsletter Signup Widget */}
              <div className="sidebar-widget bg-gradient-to-br from-[#22A152]/10 to-[#22A152]/10 border-[#22A152]/20">
                <h3 className="news-subhead text-xl font-bold mb-4 text-[#22A152]">📧 Beauty Insider Alerts</h3>
                <p className="text-sm mb-2">Get exclusive access to breakthrough beauty discoveries before they go viral!</p>
                <div className="klaviyo-form-TbbXfi"></div>
                <p className="text-xs text-news-muted mt-2">Join 50,000+ beauty insiders. Unsubscribe anytime.</p>
              </div>

              {/* Product Image Widget */}
              <div className="sidebar-widget text-center">
                <div className="editor-pick mb-4">Trending Now</div>
                <img
                  src="/lovable-uploads/86450785-7fc7-4365-86bc-00492d01b571.png"
                  alt="Essence of Argan Oil bottle with luxury packaging"
                  className="image-responsive max-w-xs mb-4 w-full h-auto"
                  loading="lazy"
                  width="300"
                  height="450"
                />
                <h4 className="font-bold mb-2">Essence of Argan Oil</h4>
                <p className="text-sm text-news-muted mb-4">The breakthrough formula dermatologists recommend</p>
                <a href={destinationUrl} className="editorial-cta w-full justify-center mb-3">
                  Check Availability →
                </a>
                <a href={destinationUrl} className="editorial-cta-urgent w-full justify-center">
                  🔥 Flash Sale - 40% Off →
                </a>
              </div>

              {/* FAQ Widget */}
              <div className="sidebar-widget">
                <h3 className="news-subhead text-xl font-bold mb-4">Frequently Asked</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Is it safe for sensitive skin?</h4>
                    <p className="text-sm text-news-muted">Yes, formulated without harsh retinol or irritating chemicals.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">When will I see results?</h4>
                    <p className="text-sm text-news-muted">Most users notice improvements within 2-4 weeks of consistent use.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Can I use it with other products?</h4>
                    <p className="text-sm text-news-muted">Yes—but headlines say you'll toss the rest; this argan breakthrough replaces eye cream, serum, and night lotion.</p>
                  </div>
                </div>
              </div>

              {/* Limited Stock Widget */}
              <div className="sidebar-widget bg-[#22A152]/10 border-[#22A152]/20">
                <h3 className="news-subhead text-xl font-bold mb-4 text-[#22A152]">⚠️ Stock Alert</h3>
                <div className="fomo-counter mb-3">⚡ {orderCount} orders today</div>
                <p className="text-sm mb-4">Less than 200 units remaining for this month. New shipments delayed until next quarter.</p>
                <a href={destinationUrl} className="editorial-cta bg-[#22A152] hover:bg-[#1d8745] w-full justify-center">
                  Order Before It's Gone →
                </a>
              </div>

              {/* Related Articles Widget */}
              <div className="sidebar-widget">
                <h3 className="news-subhead text-xl font-bold mb-6">Related Stories</h3>

                {/* Essence of Argan Article */}
                <a
                  href="https://www.beverlyhillsscoops.com"
                  className="block border-b border-gray-200 pb-6 mb-6 group"
                >
                  <img
                    src="/lovable-uploads/1554c539-cd88-45fd-a732-3a457ca6ea44.png"
                    alt="Woman holding Essence of Argan Oil with radiant skin"
                    className="w-full h-48 object-cover rounded-lg mb-3 shadow-sm"
                  />
                  <h4 className="font-semibold text-base mb-3 leading-tight transition-colors group-hover:text-[#22A152]">
                    SHOCKING: This $39 Essence of Argan Oil Outperforms $300 Luxury Brands
                  </h4>
                  <p className="text-sm text-news-muted mb-2">
                    Celebrity makeup artists reveal the affordable secret behind Hollywood's glow that's causing luxury brands to panic...
                  </p>
                  <div className="text-xs text-[#22A152] font-semibold">TRENDING NOW • 2 min read</div>
                </a>

                {/* Essence of Argan Article */}
                <a
                  href="https://www.beverlyhillsscoops.com/argan"
                  className="block border-b border-gray-200 pb-6 mb-6 group"
                >
                  <img
                    src="/lovable-uploads/88a7dfa9-88af-4d1b-92b2-d1515ac28421.png"
                    alt="Woman applying Essence of Argan oil with glowing skin"
                    className="w-full h-48 object-cover rounded-lg mb-3 shadow-sm"
                  />
                  <h4 className="font-semibold text-base mb-3 leading-tight transition-colors group-hover:text-[#22A152]">
                    EXCLUSIVE: Moroccan Argan Oil Secret That's Making Botox Obsolete
                  </h4>
                  <p className="text-sm text-news-muted mb-2">
                    Beauty insiders scramble to get their hands on this ancient anti-aging formula that's leaving dermatologists speechless...
                  </p>
                  <div className="text-xs text-[#22A152] font-semibold">BREAKING • 3 min read</div>
                </a>

                {/* Additional Article 1 */}
                <a
                  href="https://idro.vouue.com/"
                  className="block border-b border-gray-200 pb-6 mb-6 group"
                >
                  <img
                    src="/lovable-uploads/ca66e615-6b53-470a-b542-1020dc49a3d8.png"
                    alt="Woman with perfect skin results"
                    className="w-full h-48 object-cover rounded-lg mb-3 shadow-sm"
                  />
                  <h4 className="font-semibold text-base mb-3 leading-tight transition-colors group-hover:text-[#22A152]">
                    VIRAL: 58-Year-Old Mom Looks 35 After Using This 1 Simple Trick
                  </h4>
                  <p className="text-sm text-news-muted mb-2">
                    Plastic surgeons hate her! Local mom discovers fountain of youth that costs less than your morning coffee...
                  </p>
                  <div className="text-xs text-[#22A152] font-semibold">VIRAL • 4 min read</div>
                </a>

                {/* Additional Article 2 */}
                <a
                  href="https://idro.vouue.com/"
                  className="block border-b border-gray-200 pb-6 mb-6 group"
                >
                  <img
                    src="/lovable-uploads/ff2aee7a-de72-4c36-aa5c-9a46a571308c.png"
                    alt="Premium skincare product results"
                    className="w-full h-48 object-cover rounded-lg mb-3 shadow-sm"
                  />
                  <h4 className="font-semibold text-base mb-3 leading-tight transition-colors group-hover:text-[#22A152]">
                    EXPOSED: The $15 Anti-Aging Cream That Billionaires Don't Want You to Know About
                  </h4>
                  <p className="text-sm text-news-muted mb-2">
                    Silicon Valley insider leaks the secret formula that tech moguls have been hiding from the public...
                  </p>
                  <div className="text-xs text-[#22A152] font-semibold">EXCLUSIVE • 5 min read</div>
                </a>

                {/* Additional Article 3 */}
                <a
                  href="https://www.beverlyhillsscoops.com"
                  className="block group"
                >
                  <img
                    src="https://beverlyhillsscoops.com/_next/image?url=%2FWR-Page%2Fb-a5.jpg&w=828&q=75"
                    alt="Amazing before after transformation"
                    className="w-full h-48 object-cover rounded-lg mb-3 shadow-sm"
                  />
                  <h4 className="font-semibold text-base mb-3 leading-tight transition-colors group-hover:text-[#22A152]">
                    MIRACLE: Before & After Photos That Will Make You Believe in Anti-Aging Science
                  </h4>
                  <p className="text-sm text-news-muted mb-2">
                    These shocking transformation photos are proof that age is just a number when you know the right secrets...
                  </p>
                  <div className="text-xs text-[#22A152] font-semibold">MUST SEE • 3 min read</div>
                </a>
              </div>

              {/* Additional Sidebar Content */}
              <div className="sidebar-widget">
                <h3 className="news-subhead text-xl font-bold mb-4 text-[#22A152]">What's Hot Right Now</h3>
                <div className="space-y-4">
                  <div className="p-3 bg-[#22A152]/10 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-sm">Anti-Aging Market Explodes</h4>
                      <p className="text-xs text-news-muted">Peptide creams see 400% surge in demand</p>
                    </div>
                  </div>
                  <div className="p-3 bg-[#22A152]/10 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-sm">Lab Results Shock Scientists</h4>
                      <p className="text-xs text-news-muted">New formula shows unprecedented results</p>
                    </div>
                  </div>
                  <div className="p-3 bg-[#22A152]/10 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-sm">Dermatologists Recommend</h4>
                      <p className="text-xs text-news-muted">94% of experts endorse peptide therapy</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup Widget */}
              <div className="sidebar-widget bg-gradient-to-br from-[#22A152]/10 to-[#22A152]/10 border-[#22A152]/20">
                <h3 className="news-subhead text-xl font-bold mb-4 text-[#22A152]">📧 Beauty Insider Alerts</h3>
                <p className="text-sm mb-2">Get exclusive access to breakthrough beauty discoveries before they go viral!</p>
                <div className="klaviyo-form-TbbXfi"></div>
                <p className="text-xs text-news-muted mt-2">Join 50,000+ beauty insiders. Unsubscribe anytime.</p>
              </div>

              {/* Urgency Widget - Updated to Red Theme */}
              <div className="sidebar-widget bg-[#22A152]/10 border-[#22A152]/20">
                <h3 className="news-subhead text-xl font-bold mb-4 text-[#22A152]">⏰ 24-Hour Flash Sale</h3>
                <p className="text-sm mb-4">Editorial readers get 40% off, but this deal expires at midnight!</p>
                <a href={destinationUrl} className="editorial-cta w-full justify-center">
                  Claim Flash Discount →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Ingredients Section */}
        <section id="ingredients" className="content-section">
          <h2 className="news-headline text-3xl font-bold text-center text-[#22A152] mb-2">
            The "Fountain of Youth" Formula — Only One Ingredient
          </h2>
          <p className="text-center text-news-muted mb-6">
            Valued at $25,000+ per treatment in Beverly Hills
          </p>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-news-muted mb-4">
              ONLY ONE INGREDIENT: 100% pure organic Argania spinosa (Argan) kernel oil, the same that has been used for centuries in Morocco. ECO-CERTIFIED in source and origin and USDA-approved.
            </p>
            <ul className="text-left list-disc list-inside space-y-2">
              <li>Cold-pressed and unrefined to preserve vitamin E, antioxidants, and essential fatty acids.</li>
              <li>Sustainably harvested by Moroccan women’s cooperatives; eco-certified and USDA-approved.</li>
              <li>Absorbs quickly to hydrate, soften, and restore a youthful glow.</li>
              <li>Targets wrinkles, age spots, and dryness on face, neck, and hands.</li>
            </ul>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="mt-16 mb-8">
          <h2 className="news-headline text-3xl font-bold text-center text-[#22A152] mb-2">
            Breaking: Real Users Swear by Essence of Argan Oil
          </h2>
          <p className="text-center text-news-muted mb-6">
            Verified buyers say crow’s feet, neck creases, and age spots vanished after one bottle
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah M.",
                info: "Age 42 • California",
                img: "/lovable-uploads/b504a0de-77d1-4a1a-81a9-3a5b8df3d09c.png",
                quote:
                  "Essence of Argan Oil erased my lines overnight—friends swear I got Botox.",
              },
              {
                name: "Jennifer K.",
                info: "Age 39 • New York",
                img: "/lovable-uploads/39129d02-d2a2-48b6-b4ec-10c48ed5ea57.png",
                quote:
                  "My skin tightened in days; this argan oil is headlining my routine.",
              },
              {
                name: "Maria L.",
                info: "Age 45 • Florida",
                img: "/lovable-uploads/a7773bf0-7625-4586-a7ca-04d7f3fa8172.png",
                quote:
                  "Age spots faded fast—Essence of Argan Oil beat every luxury cream.",
              },
              {
                name: "Lisa R.",
                info: "Age 34 • Texas",
                img: "/lovable-uploads/3341cb70-c941-4007-9869-e2df17f93e40.png",
                quote:
                  "Crow's feet gone overnight. One bottle replaced my whole cabinet.",
              },
              {
                name: "Rachel W.",
                info: "Age 41 • Illinois",
                img: "/lovable-uploads/69a3bc2d-ee3d-4398-9e79-6ea55c0b6ac2.png",
                quote:
                  "Not even Botox worked like this—wrinkles wiped clean instantly.",
              },
              {
                name: "Amanda S.",
                info: "Age 47 • Oregon",
                img: "/lovable-uploads/b334274b-a73d-4274-b236-560bf6f40d1a.png",
                quote:
                  "Wish I'd found it sooner—overnight my skin looked years younger.",
              },
            ].map(review => (
              <div
                key={review.name}
                className="p-4 border border-[#22A152]/20 rounded-lg bg-white flex flex-col h-full"
              >
                <div className="flex items-center mb-4">
                  <a href={destinationUrl}>
                    <img
                      src={review.img}
                      alt={`${review.name} holding Essence of Argan Oil`}
                      className="w-16 h-16 rounded-full object-cover mr-4 cursor-pointer hover:opacity-90 transition-opacity"
                      loading="lazy"
                    />
                  </a>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-news-muted">{review.info}</p>
                    <span className="inline-block mt-1 bg-[#22A152] text-white text-xs px-2 py-1 rounded">
                      ✓ Verified Purchase
                    </span>
                  </div>
                </div>
                <p className="text-sm flex-grow">{review.quote}</p>
                <div className="text-yellow-400 mt-4">★★★★★</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href={destinationUrl} className="editorial-cta-large">
              Join 10,000+ Happy Customers →
            </a>
          </div>
        </section>

        {/* Beauty Revolution Section */}
        <section className="content-section">
          <h2 className="news-headline text-3xl font-bold text-center mb-4">
            Be Part of the Argan Oil Breakthrough
          </h2>
            <p className="news-body text-lg text-center mb-6">
              Women worldwide are ditching five-step routines after Essence of Argan Oil's all-in-one miracle made headlines.<br />
              See the jaw-dropping glow for yourself.
            </p>
          <div className="image-container">
            <a href={destinationUrl}>
              <img
                src="/lovable-uploads/728b83b2-04f0-4d30-80c8-6d650dfd174c.png"
                alt="Collage of women holding Essence of Argan Oil showing real customer results"
                className="image-responsive w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                loading="lazy"
                width="1200"
                height="300"
              />
            </a>
          </div>
            <div className="p-6 rounded-lg bg-pink-100 text-center">
            <h3 className="news-headline text-2xl mb-4">Shocking Stats: Essence of Argan Oil's Overnight Takeover</h3>
            <p className="news-body text-lg mb-6">
              Over 50,000 readers report Essence of Argan Oil wiping wrinkles overnight—here's the proof.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-4xl font-bold text-[#22A152] mb-2">94%</p>
                <p className="text-sm text-news-muted">Wrinkles faded within 2 weeks</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#22A152] mb-2">98%</p>
                <p className="text-sm text-news-muted">Would ditch other products</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#22A152] mb-2">91%</p>
                <p className="text-sm text-news-muted">Plan to restock before sellout</p>
              </div>
            </div>
            </div>
        </section>

        {/* Woman with Product Image */}
        <div className="content-section">
          <div className="image-container">
            <img
              src="/lovable-uploads/f9ec9638-ff55-42f3-b409-bd4984a4555a.png"
              alt="Happy woman proudly displaying her Essence of Argan Oil with confident smile and bottle in hand"
              className="image-responsive max-w-lg w-full h-auto"
              loading="lazy"
              width="600"
              height="800"
            />
            <p className="text-sm text-news-muted mt-3 italic">
              Lisa, 34, says Essence of Argan transformed her confidence and simplified her entire skincare routine
            </p>
          </div>
          {/* Another CTA */}
          <div className="text-center mt-8">
            <a href={destinationUrl} className="editorial-cta-large">
              Transform Your Skin Today →
            </a>
          </div>
        </div>

        {/* Why It's Different */}
        <div className="mb-8">
          <h2 className="news-headline text-3xl font-bold mb-4">Why Essence of Argan Oil Replaces Every Jar</h2>

          <p className="news-body text-lg mb-4">
            Beauty giants push five separate jars—eye cream, neck cream, spot corrector, night lotion, wrinkle serum.
          </p>

          <p className="news-body text-lg mb-4">
            <strong>Essence of Argan Oil blows up that routine.</strong>
          </p>

          <p className="news-body text-lg mb-4">
            This Moroccan breakthrough does the work of all five:
          </p>

          <ul className="list-disc list-inside space-y-2 mb-8 text-lg">
            <li>Erase crow's feet and deep lines</li>
            <li>Smooth neck creases overnight</li>
            <li>Fade age spots and sun damage</li>
            <li>Flood skin with all-day hydration</li>
            <li>Brighten dull texture for a camera-ready glow</li>
          </ul>
        </div>

        {/* Final CTA Section */}
        <div className="mb-8">
          <h2 className="news-headline text-3xl font-bold mb-4">Where to Get It Before It Sells Out</h2>

          <p className="news-body text-lg mb-4">
            Here's the catch: Essence of Argan Oil is only sold online, and demand has been skyrocketing since insiders dubbed it "the one-step wonder."
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
            <p className="text-lg font-semibold mb-2">⚠️ Editor's Note:</p>
            <p className="text-base">Due to overwhelming demand, new customers are limited to 2 jars per order. Once this batch is gone, shipping delays may last several weeks.</p>
          </div>

          <div className="fomo-box text-center">
            <p className="font-semibold text-lg mb-2">🔥 Breaking: 40% Off Essence of Argan Oil</p>
            <p className="text-sm mb-4">Fox Lifestyle exclusive: grab 40% off the overnight Botox-beater—but only for the next 24 hours!</p>
          </div>

          <div className="text-center">
            <a href={destinationUrl} className="editorial-cta-large text-xl px-10 py-5">
              👉 Grab 40% Off Essence of Argan Oil Before Midnight
            </a>
          </div>

          <p className="news-body text-lg mt-6 text-center font-semibold">
            Don't wait—your wrinkle-free glow starts tonight.
          </p>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12">
          <div className="klaviyo-form-TbbXfi"></div>
        </div>

        {/* Final Order Section */}
        <div id="order" className="mt-16 text-center bg-gray-50 p-8 rounded-lg">
          <h2 className="news-headline text-4xl font-bold mb-4">Where to Buy Essence of Argan Oil Before It's Gone</h2>
          <p className="news-body text-xl mb-6">Exclusive online availability – limited to 2 bottles per customer</p>
          
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="image-container mb-6">
              <img
                src="/lovable-uploads/a03480ec-e41e-478c-b6da-e1cede5b3857.png"
                alt="Radiant woman holding Essence of Argan Oil bottle with stunning results in natural lighting"
                className="w-32 h-32 mx-auto rounded-lg object-cover"
                loading="lazy"
                width="128"
                height="128"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Essence of Argan Oil</h3>
            <p className="text-lg font-semibold text-[#22A152] mb-6">Breaking News Price – 40% Off!</p>
            <div className="space-y-4">
              <a href={destinationUrl} className="editorial-cta-large text-xl px-8 py-4 w-full justify-center">
                CLAIM YOUR BOTTLE NOW →
              </a>
              <a href={destinationUrl} className="editorial-cta-urgent w-full justify-center">
                ⚡ Only 2 Hours Left - Order Now! →
              </a>
            </div>
            <p className="text-xs text-news-muted mt-6">*This breaking-news pricing is available for a limited time only</p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-news-border">
          <p className="text-xs text-news-muted text-center">
            <strong>Editorial Disclaimer:</strong> This article is for informational purposes and represents the editorial opinion of Fox Lifestyle. Individual results may vary. This content has not been evaluated by the FDA. The product is not intended to diagnose, treat, cure, or prevent any disease. Always consult with a healthcare professional before starting any new skincare regimen.
          </p>
        </div>

        {/* Footer Links */}
        <footer className="mt-4 text-center text-xs text-news-muted">
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
            <a href="https://caviargan.com/contact" className="hover:text-[#22A152]">
              Contact Us
            </a>
            <span>|</span>
            <a href="https://caviargan.com/terms" className="hover:text-[#22A152]">
              Terms and Conditions
            </a>
            <span>|</span>
            <a href="https://caviargan.com/privacy" className="hover:text-[#22A152]">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="https://caviargan.com/refund" className="hover:text-[#22A152]">
              Refund Policy
            </a>
            <span>|</span>
            <a href="https://caviargan.com/shipping" className="hover:text-[#22A152]">
              Shipping Policy
            </a>
            <span>|</span>
            <a
              href="https://streamline.everflowclient.io/affiliate/signup"
              className="hover:text-[#22A152]"
            >
              AFFILIATE SIGN UP
            </a>
          </div>
          <div className="mt-1">© 2025 Essence of Argan. All Rights Reserved</div>
        </footer>

        {/* Floating Order Button */}
        <a
          href={destinationUrl}
          className="fixed bottom-0 left-0 right-0 z-50 block w-full text-center text-white font-semibold py-3 bg-[#22A152]"
        >
          ORDER NOW - Up to 75% OFF + FREE Gua sha set! ($70 value)
        </a>

      </div>
    </div>
  );
};

export default Index;
