import { Monitor, Server, Database, Settings, Code, Wrench } from 'lucide-react';

// --- COMPONENTE HABILIDADES ---
const Skills = () => {

  // Definição das categorias e tecnologias (substitua pelas suas!)
  const skillCategories = [
    {
      title: 'Front-end',
      icon: Monitor,
      color: 'text-cyan-400',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap', 'Figma'],
    },
    {
      title: 'Back-end',
      icon: Server,
      color: 'text-pink-400',
      skills: ['Python', 'Node.js', 'Java', 'Flask'],
    },
    {
      title: 'Banco de Dados',
      icon: Database,
      color: 'text-green-400',
      skills: ['SQL', 'PostgreSQL'],
    },
    {
      title: 'Ferramentas e Outros',
      icon: Wrench,
      color: 'text-yellow-400',
      skills: ['Git', 'GitHub', 'Godot Engine', 'Kanban'],
    },
  ];

  return (
    <section id="habilidades" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Minhas Habilidades & Stack
        </h2>
        
        {/* Grid de Categorias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.title}
              className={`bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 flex flex-col items-center text-center 
                          transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-[1.02]`}
            >
              {/* Ícone da Categoria */}
              <category.icon size={36} className={`${category.color} mb-4`} />
              
              {/* Título da Categoria */}
              <h3 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 w-full pb-2">
                {category.title}
              </h3>
              
              {/* Badges de Habilidades */}
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-700 text-gray-200 text-sm px-4 py-1 rounded-full font-medium transition-colors hover:bg-cyan-600 hover:text-white"
                  >
                    {skill}
                  </span>
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