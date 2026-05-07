export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Prompt Marketplace
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Buy &amp; Sell Proven<br />
          <span className="text-[#58a6ff]">AI Prompt Templates</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Access a curated library of battle-tested prompt templates with real performance metrics, ratings, and detailed use case documentation — built for AI-powered businesses and prompt engineers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Get Access — $15/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          {[
            ["500+", "Prompt Templates"],
            ["4.8★", "Avg. Rating"],
            ["12k+", "Engineers"],
          ].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
            Most Popular
          </span>
          <h3 className="text-xl font-bold text-white mb-1">Pro Access</h3>
          <div className="text-4xl font-extrabold text-[#58a6ff] my-4">
            $15<span className="text-lg font-normal text-[#8b949e]">/mo</span>
          </div>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Unlimited prompt template downloads",
              "Performance metrics & benchmarks",
              "Sell your own templates",
              "Priority support & updates",
              "Early access to new categories",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start for $15/mo
          </a>
          <p className="text-xs text-[#8b949e] mt-3">Cancel anytime. No hidden fees.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What kind of prompt templates are available?",
              a: "We offer templates for GPT-4, Claude, Gemini, and more — covering content creation, coding, data analysis, customer support, and dozens of other use cases, each with documented performance metrics.",
            },
            {
              q: "Can I sell my own prompt templates?",
              a: "Yes! Pro subscribers can list and sell their own tested prompts. You set the price and keep the majority of revenue. We handle payments and distribution.",
            },
            {
              q: "How do I cancel my subscription?",
              a: "You can cancel anytime from your account dashboard or by contacting support. You'll retain access until the end of your billing period with no questions asked.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} PromptMarket. All rights reserved.
      </footer>
    </main>
  );
}
