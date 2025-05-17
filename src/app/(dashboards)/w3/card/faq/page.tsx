import Image from 'next/image'

export default function VirtualCardFaqsPage() {
  const faqs = [
    {
      number: 1,
      question: 'What is the cost of creating the virtual cards?',
      answer: 'There is no cost for creating a Naira virtual card.\nThe cost to create a Dollar card is $1.',
    },
    {
      number: 2,
      question: 'What is the minimum amount to fund the USD card?',
      answer: 'The minimum amount to fund the Dollar is $1 before creating the card.',
    },
    {
      number: 3,
      question: 'What is the minimum limit one can fund?',
      answer: 'Naira: ₦1,000,000\nDollar: $10,000',
    },
    {
      number: 4,
      question: 'What is the monthly maintenance fee for the cards?',
      answer: 'Naira: Free\nDollar: $1 monthly',
    },
  ]

  const getBadgeColor = (num: number) => {
    return {
      1: 'bg-[#0D60D8]',
      2: 'bg-[#F4B400]',
      3: 'bg-[#0D60D8]',
      4: 'bg-[#F4B400]',
    }[num] || 'bg-gray-400'
  }

  return (
    <div className="bg-black min-h-screen text-[#2C2C2C]">

      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Header */}
        <h1 className="text-center text-2xl font-semibold text-gray-500 mb-1">
          FAQs for the Gbese
        </h1>
        <h2 className="text-center text-xl text-[#0D60D8] font-medium mb-10">
          Virtual Card
        </h2>

        {/* FAQ Items */}
        <div className="space-y-8">
          {faqs.map((faq) => (
            <div key={faq.number} className="flex items-start space-x-4">
              {/* Number badge */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0 ${getBadgeColor(faq.number)}`}
              >
                {faq.number}
              </div>

              {/* Q and A content */}
              <div className="space-y-2">
                <div className="flex">
                  <span className="font-semibold text-white mr-1">Q:</span>
                  <span className="text-[#062B61] font-medium">{faq.question}</span>
                </div>
                <div className="flex">
                  <span className="font-semibold text-white mr-1">A:</span>
                  <span className="whitespace-pre-line text-gray-400">{faq.answer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Hint Box */}
        <div className="mt-12 bg-[#D6E3FC] rounded-md p-4 flex items-start space-x-4 text-sm text-gray-500">
          <Image
            src="/card-faq.svg"
            alt="Card Icon"
            width={24}
            height={24}
          />
          <p>
            Your virtual card details will be available instantly upon request if your KYC is complete
            and your wallet is funded with the required amount. Refresh the page by going to the
            Home page and coming back into the cards feature.
          </p>
        </div>
      </div>
    </div>
  )
}
