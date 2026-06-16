import { motion } from 'framer-motion';

export default function FAQSection() {
  const faqs = [
    {
      q: "Who is Aditya Sharma?",
      a: "Aditya Sharma, also known as Aadi (and online as WTF Aadi), is a BCA student and aspiring full-stack developer focused on building practical web applications using JavaScript, React, APIs, Tailwind CSS, and modern UI design."
    },
    {
      q: "What kind of projects do you build?",
      a: "I build web projects that solve practical problems, such as developer tools, API-based apps, portfolio websites, business websites, and student-focused web applications."
    },
    {
      q: "What is your main tech stack?",
      a: "My current tech stack includes HTML, CSS, JavaScript, React, Tailwind CSS, GitHub API, Chart.js, Node.js, Express.js, MongoDB, Git, GitHub, and Vercel."
    },
    {
      q: "What is GitAura?",
      a: "GitAura is a GitHub profile analyzer and developer analytics dashboard. It uses the GitHub API to show profile insights, repository data, developer activity, and visual statistics in a clean interface."
    },
    {
      q: "Are you a full-stack developer?",
      a: "I am currently learning full-stack development. My strongest area is frontend development, and I am improving my backend skills with Node.js, Express.js, MongoDB, and REST APIs."
    },
    {
      q: "Are you available for internships or freelance projects?",
      a: "Yes, I am open to internships, beginner-friendly freelance projects, collaboration opportunities, and real-world web development work where I can learn and contribute."
    },
    {
      q: "What are you currently learning?",
      a: "I am currently learning Java DSA, backend development, API integration, MongoDB, SEO, web performance, and better UI/UX design."
    },
    {
      q: "Why did you create this portfolio?",
      a: "I created this portfolio to showcase my projects, skills, learning journey, and development progress in one place. It helps recruiters, collaborators, and visitors understand what I build and what I am currently learning."
    },
    {
      q: "How can someone contact you?",
      a: "You can contact me through the contact section of this website, GitHub, LinkedIn, or email. I am open to project discussions, collaborations, internships, and learning opportunities."
    },
    {
      q: "What is your goal as a developer?",
      a: "My goal is to become a skilled software developer by building real projects, improving problem-solving skills, learning full-stack development, and gaining practical experience through internships and collaborations."
    }
  ];

  return (
    <section id="faq" className="w-full py-10 px-4 max-w-7xl mx-auto bg-custom-blue border-2 border-b-4 border-r-4 border-black rounded-3xl shadow-neo selection:bg-custom-yellow selection:text-black">
      {/* Header */}
      <div className="flex items-center gap-4 mb-10 max-w-full">
        <div className="bg-custom-yellow px-4 md:px-8 py-2.5 md:py-3 rounded-2xl md:rounded-full border-4 border-black w-fit shadow-neo max-w-full">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-shrikhand text-black text-center leading-tight">Frequently Asked Questions</h2>
        </div>
      </div>

      {/* FAQ Cards List */}
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white border-4 border-black p-6 rounded-2xl shadow-neo"
          >
            <h3 className="text-xl font-black mb-2 text-custom-purple font-mono">
              {faq.q}
            </h3>
            <p className="text-base font-bold text-gray-800 leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
