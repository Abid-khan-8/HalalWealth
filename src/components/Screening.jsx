export default function Screening() {
  return (
    <section id="screening" className="py-20 bg-white text-center">
      <h2 className="text-5xl font-bold text-emerald-900 mb-6">
        Shariah Stock Screening
      </h2>

      <p className="text-xl text-gray-700 max-w-3xl mx-auto">
        We screen stocks based on:
      </p>

      <ul className="mt-6 space-y-2 text-lg text-gray-700">
        <li>✔ No involvement in Riba (Interest)</li>
        <li>✔ No alcohol, gambling, adult content</li>
        <li>✔ Debt ratio compliance</li>
        <li>✔ Shariah supervisory guidance</li>
      </ul>
    </section>
  );
}
