import React from 'react';
import compassIcon from '../assets/images/compass.png';
import excellenceIcon from '../assets/images/excellence.png';
import relevanceIcon from '../assets/images/relevance.png';
import coachingIcon from '../assets/images/coaching.png';
import scalableIcon from '../assets/images/scalable.png';

const features = [
  {
    title: 'Career Compass',
    desc: 'See current, achievable roles with a clear timeline and recommended actions',
    img: compassIcon,
    bg: 'bg-blue-50',
  },
  {
    title: 'Application Excellence',
    desc: 'Track resumes, get status updates, and prep guides for assessments and interviews.',
    img: excellenceIcon,
    bg: 'bg-pink-50',
  },
  {
    title: 'Real-time Relevance',
    desc: 'Scores matches by fit & visa eligibility so you apply to realistic opportunities.',
    img: relevanceIcon,
    bg: 'bg-orange-50',
  },
  {
    title: 'Empowerment Coaching',
    desc: 'Actionable micro-steps and resources tailored by role and country.',
    img: coachingIcon,
    bg: 'bg-cyan-50',
  },
  {
    title: 'Scalable Access',
    desc: 'Works everywhere. Global access compared to others limited regions.',
    img: scalableIcon,
    bg: 'bg-purple-50',
  },
];

export default function WhyJobFindDifferent() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 lg:px-28">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why JobFind.AI is different</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          We are not another job board. We are your career acceleration partner, using the <span className="font-bold">CARES</span> framework.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-white p-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 shadow-md hover:shadow-lg transition-all ${feature.bg} flex flex-col items-start text-left`}
          >
            <img src={feature.img} alt={feature.title} className="w-10 h-10 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}