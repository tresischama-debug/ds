export default function ContactPage() {
   return (
    <div className="w-full flex flex-col items-center py-16 px-4 normal-font">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold heading-font mb-10 text-center">
        GET IN TOUCH
      </h1>

      {/* Form Container */}
      <form className="w-full max-w-lg space-y-6">

        {/* Row 1 */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First name"
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="Last name"
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="Phone number"
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Topic Dropdown */}
        <div>
          <label className="block mb-1 font-medium">Choose a topic</label>
          <select
            className="w-full border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option>Select one...</option>
            <option>General Question</option>
            <option>Partnership</option>
            <option>Technical Support</option>
            <option>Other</option>
          </select>
        </div>

        {/* Message Box */}
        <div>
          <label className="block mb-1 font-medium">How can we help?</label>
          <textarea
            placeholder="Type your message..."
            className="w-full border rounded-md px-3 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="w-full flex justify-center pt-4">
          <button
            type="submit"
            className="px-10 py-3 bg-[#e9a8ad] rounded-full text-white font-semibold hover:opacity-90 transition"
          >
            SEND MESSAGE
          </button>
        </div>

      </form>
    </div>
  )
}

