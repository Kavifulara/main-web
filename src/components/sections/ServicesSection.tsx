"use client";

import FadeIn from "../ui/FadeIn";

const services = [
  {
    number: "01",
    title: "No Need To Go Out",
    desc: "You don't need to go out to the market for buying clothes . We bring your local market online . Just one click and the clothes will be delivered directly at your home .",
  },

  {
    number: "02",
    title: "Delivery within 24 hours",
    desc: "Just order it . No need to worry when it will be delivered . The product will be delivered within 24 hours after ordering . And you don't need to buy any subscription or pay extra for that .",
  },

  {
    number: "03",
    title: "We show what suits you",
    desc: "We give you clothes recommendation according to your body type and your skin color so that you stand out of all .",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 text-[#0C0C0C]">

      <h2
        className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{
          fontSize: "clamp(3rem,12vw,160px)",
        }}
      >
        Services we provide
      </h2>

      <div className="max-w-5xl mx-auto">

        {services.map((service, i) => (
          <FadeIn key={i} delay={i * 0.1}>

            <div className="border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 flex flex-col md:flex-row gap-6 md:gap-10">

              <div
                className="font-black"
                style={{
                  fontSize: "clamp(3rem,10vw,140px)",
                }}
              >
                {service.number}
              </div>

              <div className="flex flex-col gap-4">

                <h3
                  className="font-medium uppercase"
                  style={{
                    fontSize: "clamp(1rem,2.2vw,2.1rem)",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  className="font-light leading-relaxed opacity-60 max-w-2xl"
                  style={{
                    fontSize: "clamp(0.85rem,1.6vw,1.25rem)",
                  }}
                >
                  {service.desc}
                </p>

              </div>

            </div>

          </FadeIn>
        ))}

      </div>
    </section>
  );
}