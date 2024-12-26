import Link from "next/link"

const faqs = [
    {
      question: 'What exactly are you selling?',
      answer:
        'You are buying an ebook website template that you can use to sell your own ebooks. Its configured with Stripe and Resend so that you can get paid and deliver your ebooks automatically.',
    },
    {
      question: 'Do I get a 30-day money-back guarantee?',
      answer:
        'Yes! If you are not satisfied with your purchase, you can request a refund within 30 days of your purchase. No questions asked.',
    },
    {
      question: 'Where do I find support if I get stuck?',
      answer:
        `You'll get access to a setup guide to configure your template once you complete the purchase. For any other questions, you can hit us on our private Discord Server`,
    },
    {
      question: 'Can I share my purchase with my team?',
      answer:
        'No, your purchase is for a single user only. If you want to share your purchase with your team, you will need to purchase additional licenses.',
    },
    // More questions...
  ];

  
  export default function Faq() {
    const xHandler = "https://x.com/@LTchitue";
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-pretty text-3xl font-semibold tracking-tight text-blue-600 sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
                Can’t find the answer you’re looking for? Leave a message at <Link href={xHandler}>@LTchitue</Link> on X and Get an Instant reply.
              </p>
            </div>
            <div className="mt-10 lg:col-span-7 lg:mt-0">
              <dl className="space-y-10">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="font-display text-3xl font-semibold tracking-tight text-blue-600">{faq.question}</dt>
                    <dd className="mt-2 font-display text-2xl tracking-tight text-blue-900">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    )
  }
  