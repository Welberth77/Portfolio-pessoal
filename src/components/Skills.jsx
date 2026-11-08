import { Monitor, Server, Database, Wrench } from 'lucide-react';

// --- HABILIDADES ---
const skillCategories = [
  {
    title: 'Front-end',
    icon: Monitor,
    skills: ['React', 'JavaScript', 'Tailwind', 'HTML5', 'CSS3'],
  },
  {
    title: 'Back-end',
    icon: Server,
    skills: ['Node.js', 'Python', 'Flask', 'Java'],
  },
  {
    title: 'Dados',
    icon: Database,
    skills: ['PostgreSQL', 'Supabase', 'SQL', 'SQLite'],
  },
  {
    title: 'Ferramentas',
    icon: Wrench,
    skills: ['Git', 'Docker', 'Postman', 'Power BI', 'Godot', 'Kanban'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container section-inner">
        <p className="kicker">02 — Stack</p>
        <h2 className="section-title mb">Habilidades &amp; ferramentas</h2>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-card">
              <div className="skill-head">
                <category.icon size={20} />
                <h3>{category.title}</h3>
              </div>
              <div className="tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
