import { motion } from 'framer-motion';
import Seo from '@/components/Seo';
import SkillsSection from '@/components/SkillsSection';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <Seo
        title="About"
        description="Krithik Sharan - data analyst with a background in fintech, business intelligence and risk analytics, now pursuing an MSc in Data Science at the University of Leeds."
      />
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold">About Me</h1>
          <div className="w-20 h-1 bg-primary mx-auto mt-2"></div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-foreground/80 space-y-6"
        >
          <p className="text-lg italic font-medium text-center">
            𝙄𝙣 𝙖𝙣 𝙪𝙣𝙥𝙧𝙚𝙙𝙞𝙘𝙩𝙖𝙗𝙡𝙚 𝙬𝙤𝙧𝙡𝙙, 𝙄'𝙫𝙚 𝙖𝙡𝙬𝙖𝙮𝙨 𝙗𝙚𝙚𝙣 𝙙𝙧𝙖𝙬𝙣 𝙩𝙤 𝙬𝙝𝙖𝙩 𝙘𝙖𝙣 𝙗𝙚 𝙥𝙧𝙚𝙙𝙞𝙘𝙩𝙚𝙙 - the structure and clarity that data brings.
          </p>

          <p>
            🔍 Where others see chaos, I see patterns. Where most shy away from uncertainty, I see an opportunity to analyze, quantify, and influence outcomes.
          </p>

          <p>
            My journey into data science didn't start with a textbook - it started with a love for probability, the math of possibility, and a desire to solve real-world problems.
            💡 Since then, I've explored fintech, business intelligence, and risk analytics - always striving to make data not just usable, but understandable.
          </p>

          <div className="bg-card/50 p-6 rounded-lg border border-border/50">
            <p className="font-semibold mb-2">✨ 𝗣𝗿𝗼𝘂𝗱 𝗺𝗼𝗺𝗲𝗻𝘁?</p>
            <p>
              Digitizing decades of investment data at Radiant Ventures, a project that blended data migration, change management, and human connection.
            </p>
            <p className="mt-2">
              📁 I built master tables from scratch, helped financial veterans embrace new workflows, and designed systems so intuitive they became second nature.
            </p>
            <p className="mt-2">
              🤝 It reminded me: the best data work happens where technical skill meets human empathy.
            </p>
          </div>

          <div>
            <p>🛠️ With hands-on experience in SQL, Python, Power BI, and a background in risk assessment, A/B testing, and UI design, I've delivered insights that:</p>
            <ul className="mt-2 space-y-1 ml-4">
              <li>✅ Reduced losses</li>
              <li>✅ Accelerated decisions</li>
              <li>✅ Boosted retention</li>
            </ul>
            <p className="mt-2">And when needed? I've gone manual - parsing handwritten records and perfecting dashboards until they feel just right.</p>
          </div>

          <p>
            🎓 Now, I'm pursuing my MSc in Data Science at the University of Leeds, diving deeper into research and machine learning - areas I've long admired (and finally decided to master).
          </p>

          <div className="bg-card/50 p-6 rounded-lg border border-border/50">
            <p>
              🎮 Outside work, <em>I'm a completionist gamer</em> - RPGs, FPS, puzzles - if there's a hidden collectible, I'll find it.
            </p>
            <p className="mt-2">That mindset flows into my work too:</p>
            <ul className="mt-2 space-y-1 ml-4">
              <li>✨ I finish what I start.</li>
              <li>✨ I polish what I touch.</li>
              <li>✨ I love doing things right.</li>
            </ul>
          </div>

          <p>
            ⚽🏐🏀 I'm also a huge sports fan - mainly football, volleyball & basketball.
            I captained the first school teams in all three, helping build some of the strongest squads in South Tamil Nadu, and later played university-level volleyball pre-COVID.
            Being captain wasn't just about wins; it taught me how to lead, bounce back, back my team, and keep energy high no matter the score.
          </p>

          <div>
            <p>I'm here to connect with:</p>
            <ul className="mt-2 space-y-1 ml-4">
              <li>🔹 Data teams</li>
              <li>🔹 Fellow MSc students</li>
              <li>🔹 Startup founders</li>
              <li>🔹 Anyone building something worth caring about</li>
            </ul>
          </div>

          <p className="text-center font-medium mt-8">
            𝗪𝗼𝗿𝗸𝗶𝗻𝗴 𝗮𝘁 𝘁𝗵𝗲 𝗰𝗿𝗼𝘀𝘀𝗿𝗼𝗮𝗱𝘀 𝗼𝗳 𝗱𝗮𝘁𝗮, 𝗱𝗲𝗰𝗶𝘀𝗶𝗼𝗻𝘀 & 𝗵𝘂𝗺𝗮𝗻 𝗯𝗲𝗵𝗮𝘃𝗶𝗼𝗿?
          </p>
          <p className="text-center">
            Let's chat - over a <em>cup of coffee</em> ☕ or even better, <em>a plate of Biriyani</em> 🍛
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mt-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">Skills &amp; Tools</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-2"></div>
          </div>
          <SkillsSection />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
