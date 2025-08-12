import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased p-6">
      <div className="max-w-[1400px] mx-auto">
        <header className="flex items-center justify-between gap-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-lg bg-teal-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold">Voiceitt</span>
            </div>
            <div>
              <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">
                Voiceitt — Clinical Infographic
              </h1>
              <p className="text-sm text-slate-600 mt-1">High‑AI speech recognition for nonstandard speech — evidence summary for SLPs</p>
            </div>
          </div>
          <div className="text-right">
            <div className="inline-flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs">A3 landscape ready</span>
              <button
                onClick={() => window.print()}
                className="px-3 py-2 bg-teal-600 text-white rounded-md text-sm shadow-sm hover:bg-teal-700"
              >
                Print / Export PDF
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-2">Tip: choose A3, landscape when printing to PDF</p>
          </div>
        </header>

        <main className="grid grid-cols-12 gap-6">
          <section className="col-span-8 space-y-6">
            <article className="p-6 rounded-2xl border border-slate-100 shadow-sm bg-white">
              <h2 className="text-2xl font-bold text-teal-700 mb-2">What is Voiceitt?</h2>
              <p className="text-base text-slate-700 leading-relaxed">
                Voiceitt is a personalized speech recognition solution for individuals with nonstandard speech
                (e.g., dysarthria, cerebral palsy, Parkinson's, ALS, stroke). It trains a custom voice model for each
                user by collecting repeated utterances of target phrases. The trained model enables clearer output,
                smart‑home control, and meeting captions via integrations (Alexa, Webex, Teams, Zoom).
              </p>

              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center">🎯</div>
                  <div>
                    <div className="text-sm font-semibold">Personalized models</div>
                    <div className="text-xs text-slate-600">Built per user from recorded phrases</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center">🧠</div>
                  <div>
                    <div className="text-sm font-semibold">High‑AI engine</div>
                    <div className="text-xs text-slate-600">Uses deep learning & end‑to‑end modeling</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center">🔗</div>
                  <div>
                    <div className="text-sm font-semibold">Platform integration</div>
                    <div className="text-xs text-slate-600">Alexa, Webex, Teams, Zoom (via APIs)</div>
                  </div>
                </div>
              </div>
            </article>

            <article className="p-6 rounded-2xl border border-slate-100 shadow-sm bg-[#f7fdfd]">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-800">AI Classification</h3>
                <div className="px-3 py-1 rounded-md bg-teal-600 text-white font-semibold">High AI</div>
              </div>

              <p className="mt-3 text-slate-700">Voiceitt employs high‑complexity AI methods. Key technical points:</p>
              <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
                <li>End‑to‑end deep learning (e.g., convolutional networks) analyzing entire utterances.</li>
                <li>Designed to learn from small, user‑specific datasets and refine continuously.</li>
                <li>Phrase‑centric models (trained phrase sets) rather than unconstrained transcription.</li>
              </ul>

              <div className="mt-4 p-4 bg-white rounded-lg border border-slate-100">
                <div className="text-sm text-slate-600">Why "High AI" matters for clinicians:</div>
                <p className="text-sm text-slate-700 mt-2">High‑AI models provide adaptability to atypical speech but require
                  appropriate infrastructure, data governance, and careful evaluation before clinical adoption.</p>
              </div>
            </article>

            <article className="p-6 rounded-2xl border border-slate-100 shadow-sm bg-white">
              <h3 className="text-xl font-bold text-slate-800 mb-3">How it works (simplified flow)</h3>

              <div className="grid grid-cols-5 gap-4 items-start">
                {[
                  { step: '1. Phrase selection', note: 'Choose functional phrases (home, work, therapy targets)' },
                  { step: '2. Training', note: 'Record multiple exemplars (~3–5 mins per phrase)' },
                  { step: '3. Model build', note: 'Personalized recognition profile created' },
                  { step: '4. Unlock & use', note: 'Real‑time use for commands & captions' },
                  { step: '5. Continuous learning', note: 'Additional samples refine accuracy' },
                ].map((s, i) => (
                  <div key={i} className="p-3 rounded-lg border border-slate-100 bg-slate-50">
                    <div className="text-sm font-semibold text-teal-700">{s.step}</div>
                    <div className="text-xs text-slate-600 mt-2">{s.note}</div>
                  </div>
                ))}
              </div>
            </article>

            <article className="p-6 rounded-2xl border border-slate-100 shadow-sm bg-[#f7fbfb]">
              <h3 className="text-xl font-bold text-slate-800">Validity & Reliability — Evidence Summary</h3>

              <div className="mt-3 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-slate-700">Current evidence is preliminary but suggests better recognition for trained
                    phrase sets compared with unmodified mainstream ASR for atypical speech.</p>
                  <ul className="list-disc list-inside text-slate-700 mt-3 space-y-1 text-sm">
                    <li>Pilot reports: trained phrase WER ≈ 8% (~92% accuracy) in small samples.</li>
                    <li>Mainstream ASR often fails on dysarthric speech (much higher WERs for severe cases).</li>
                    <li>Limitations: small sample sizes, individualized models, and limited longitudinal data.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-white border border-slate-100">
                  <div className="text-xs text-slate-600">Example comparative chart (illustrative)</div>
                  <div className="mt-3 space-y-2">
                    <div className="h-4 bg-slate-200 rounded-md relative">
                      <div className="h-4 rounded-md bg-slate-400" style={{ width: '88%' }}></div>
                      <div className="absolute right-2 top-0 text-xs text-white font-semibold">Standard ASR WER ~80–90%</div>
                    </div>

                    <div className="h-4 bg-slate-200 rounded-md relative">
                      <div className="h-4 rounded-md bg-teal-600" style={{ width: '8%' }}></div>
                      <div className="absolute right-2 top-0 text-xs text-white font-semibold">Voiceitt (trained) WER ~8%</div>
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-slate-500">Notes: these figures are illustrative of reported pilot outcomes; see references for details.</p>
                </div>
              </div>

              <div className="mt-4 text-sm text-slate-600">
                Ongoing clinical trials (e.g., university pilots) are required to establish generalisability,
                longitudinal reliability, and functional benefits across clinical cohorts.
              </div>
            </article>

          </section>

          <aside className="col-span-4 space-y-6">
            <div className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm">
              <h4 className="text-lg font-bold text-slate-800">Client Perspectives</h4>
              <blockquote className="mt-3 border-l-4 border-teal-200 pl-4 italic text-slate-700">
                “When I introduce myself, you might pay attention to my voice before you pay attention to my words...but at work, my words come alive.”
                <div className="text-xs text-slate-500 mt-2">— Michael, cerebral palsy (representative quote)</div>
              </blockquote>

              <blockquote className="mt-4 border-l-4 border-teal-200 pl-4 italic text-slate-700">
                “I use it all the time… It’s a key part of getting my voice back.”
                <div className="text-xs text-slate-500 mt-2">— Voiceitt user (representative quote)</div>
              </blockquote>

              <p className="mt-4 text-xs text-slate-500">Note: quotes are illustrative of reported user experiences; these should be contextualised with clinical evaluation.</p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-100 bg-[#f8fdfd] shadow-sm">
              <h4 className="text-lg font-bold text-slate-800">Partnerships & Integrations</h4>
              <p className="text-sm text-slate-600 mt-2">Examples of platform & industry collaborations; logos below are placeholders.</p>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {['Amazon Alexa', 'NVIDIA Inception', 'AWS Activate', 'Cisco Webex', 'Microsoft Teams'].map((n) => (
                  <div key={n} className="p-3 rounded-md border border-slate-100 bg-white text-xs text-slate-700">
                    {n}
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-500 mt-3">Partnerships enable integration and scale but are not a substitute for independent clinical evidence.</p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm">
              <h4 className="text-lg font-bold text-slate-800">Clinical Considerations (Neutral)</h4>
              <ul className="mt-2 list-disc list-inside text-sm text-slate-700 space-y-1">
                <li>Interpret pilot findings cautiously; prioritize controlled outcome measures.</li>
                <li>Obtain informed consent addressing data privacy and limits of accuracy.</li>
                <li>Design local pilots with functional goals and monitoring plans.</li>
                <li>Consider equity, cost, and fit with existing AAC options.</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-slate-100 bg-slate-50 text-xs text-slate-700">
              <strong>Selected references (APA 7):</strong>
              <ol className="mt-2 list-decimal list-inside space-y-1 text-xs text-slate-600">
                <li>Cave, R., & Bloch, S. (2021). Disability and Rehabilitation: Assistive Technology.</li>
                <li>Delaney, K. (2023). Cisco Newsroom.</li>
                <li>Gattegno, L. (2024). The Hearing Review.</li>
                <li>Hardesty, L. (2021). Amazon Science.</li>
                <li>Howarth, E., et al. (2024). Assistive Technology.</li>
              </ol>

              <div className="mt-3 text-xs text-slate-500">Full APA 7 citations are included in the downloadable poster PDF and developer notes.</div>
            </div>

          </aside>
        </main>

        <footer className="mt-8 text-xs text-slate-500 border-t border-slate-100 pt-4">
          <div className="max-w-[1100px] mx-auto text-center">This informational website is an evidence‑focused summary for clinicians. It is neutral in stance and not an endorsement. Replace placeholder logos and quotes with documented, consented assets before public distribution.</div>
        </footer>
      </div>

      <style>{`@media print { @page { size: A3 landscape; margin: 10mm; } button, nav, header button { display: none !important; } }`}</style>
    </div>
  );
}
