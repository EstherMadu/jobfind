import bestJob from "../assets/images/best_job.svg";
import June from "../assets/images/june.svg";
import smartNudges from "../assets/images/smart_nudges.svg";
import Dod from "../assets/images/director_of_designs.svg";
import LoadingJob from "../assets/images/loading_job.svg";
import pattern from "../assets/images/background_pattern.svg"; 
const features = [
  {
    title: "Career Mapping Engine",
    desc: "AI-powered career path prediction.",
    img: Dod,
  },
  {
    title: "Application Tracker",
    desc: "Track resume views, rejections, assessments, interview dates.",
    img: June,
  },
  {
    title: "FitScore",
    desc: "Get instant compatibility ratings for every role.",
    img: LoadingJob,
  },
  {
    title: "Visa Filter",
    desc: "Navigate international opportunities with confidence.",
    img: bestJob,
  },
  {
    title: "Clarity Engine",
    desc: "Daily micro-actions and suggested learning to close gaps.",
    img: smartNudges,
  },
];

export default function JobFeatures() {
  return (
    <section className="bg-[#F8FAFF] py-20 px-6 md:px-16 lg:px-28">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B0C10] mb-4">
          Smart Features for Career Growth
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our AI technology revolutionizes how you discover and apply to
          opportunities that match your unique profile and career aspirations.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative rounded-2xl p-6 text-white shadow-lg hover:-translate-y-1 transition-transform overflow-hidden"
            style={{
              backgroundColor: "#0B0C10",
              backgroundImage: `url(${pattern})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
              backgroundSize: "100% 70%", 
            }}
          >
            <div className="relative w-full h-44 flex items-center justify-center mb-4">
              <img
                src={feature.img}
                alt={feature.title}
                className="w-[95%] max-w-[340px] pt-6 pb-4 rounded-xl shadow-xl"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              {feature.title}
            </h3>
            <p className="text-gray-300 text-center text-sm">
              {feature.desc}
            </p>
          </div>
        ))}

        {/* CTA Card */}
        <div
          className="relative rounded-2xl flex flex-col justify-center items-center p-10 text-white shadow-lg hover:-translate-y-1 transition-transform"
          style={{
            backgroundColor: "#0B0C10",
            backgroundImage: `url(${pattern})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            backgroundSize: "100% 70%",
          }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Ready to begin your career journey?
          </h3>
          <button className="bg-[#576ADF] hover:bg-[#4A5ED1] transition-all text-white px-12 py-2 rounded-md font-medium">
            Join the Waitlist
          </button>
        </div>
      </div>
    </section>
  );
}
