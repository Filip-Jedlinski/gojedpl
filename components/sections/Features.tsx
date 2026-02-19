export default function Features() {
  const features = [
    {
      icon: (
        <svg
          className="w-10 h-10 text-primary"
          fill="currentColor"
          viewBox="0 -960 960 960"
        >
          <path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z" />
        </svg>
      ),
      title: "Szybko",
      description:
        "Realizujemy projekty w krótkim czasie. Bez zbędnych opóźnień.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-primary"
          fill="currentColor"
          viewBox="0 -960 960 960"
        >
          <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" />
        </svg>
      ),
      title: "Profesjonalnie",
      description:
        "Nowoczesny design, responsywność mobile-first, szybkie ładowanie.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-primary"
          fill="currentColor"
          viewBox="0 -960 960 960"
        >
          <path d="M475-160q4 0 8-2t6-4l328-328q12-12 17.5-27t5.5-30q0-16-5.5-30.5T817-607L647-777q-11-12-25.5-17.5T591-800q-15 0-30 5.5T534-777l-11 11 74 75q15 14 22 32t7 38q0 42-28.5 70.5T527-522q-20 0-38.5-7T456-550l-75-74-175 175q-3 3-4.5 6.5T200-435q0 8 6 14.5t14 6.5q4 0 8-2t6-4l136-136 56 56-135 136q-3 3-4.5 6.5T285-350q0 8 6 14t14 6q4 0 8-2t6-4l136-135 56 56-135 136q-3 2-4.5 6t-1.5 8q0 8 6 14t14 6q4 0 7.5-1.5t6.5-4.5l136-135 56 56-136 136q-3 3-4.5 6.5T454-180q0 8 6.5 14t14.5 6Zm-1 80q-37 0-65.5-24.5T375-166q-34-5-57-28t-28-57q-34-5-56.5-28.5T206-336q-38-5-62-33t-24-66q0-20 7.5-38.5T149-506l232-231 131 131q2 3 6 4.5t8 1.5q9 0 15-5.5t6-14.5q0-4-1.5-8t-4.5-6L398-777q-11-12-25.5-17.5T342-800q-15 0-30 5.5T285-777L144-635q-9 9-15 21t-8 24q-2 12 0 24.5t8 23.5l-58 58q-17-23-25-50.5T40-590q2-28 14-54.5T87-692l141-141q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l11 11 11-11q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l169 169q23 23 35 53t12 61q0 31-12 60.5T873-437L545-110q-14 14-32.5 22T474-80Zm-99-560Z" />
        </svg>
      ),
      title: "Partnersko",
      description:
        "Jasna umowa, wsparcie po wdrożeniu, opieka techniczna opcjonalna.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-primary"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-5 21c-.83 0-1.5-.67-1.5-1.5S11.17 19 12 19s1.5.67 1.5 1.5S12.83 22 12 22zm5-4H7V4h10v14z" />
        </svg>
      ),
      title: "Na każde urządzenie",
      description:
        "Dostosowana do wszystkich urządzeń. Garantowana funkcjonalność.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="eyebrow">Czemu warto z nami pracować</p>
          <h2>Pełna obsługa od A do Z</h2>
          <p className="text-dark text-lg mt-4">
            Dbamy o każdy szczegół, żeby Twoja strona działała bezproblemowo i
            przynosiła konkretne rezultaty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border border-line rounded-xl p-6 hover:border-primary/30 transition text-center md:text-left"
            >
              <div className="mb-4 flex justify-center md:justify-start">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-dark">
                {feature.title}
              </h3>
              <p className="text-dark text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
