import { ArrowUpRight } from 'lucide-react';

const PLACEHOLDER = 'https://placehold.co/600x400/171B22/72808E?text=Projeto';

// --- CARD DE PROJETO (grid) ---
const ProjectCard = ({ title, description, tags, githubUrl, liveUrl, imageUrl }) => {
  return (
    <article className="proj-card">
      <div className="proj-cover">
        <img
          src={imageUrl || PLACEHOLDER}
          alt={`Preview do projeto ${title}`}
          loading="lazy"
          onError={(e) => { e.currentTarget.src = PLACEHOLDER; }}
        />
      </div>

      <div className="proj-body">
        <h3>{title}</h3>
        <p className="proj-desc">{description}</p>

        <div className="proj-tags">
          {tags.map((tag) => (
            <span key={tag} className="tag-sm">{tag}</span>
          ))}
        </div>

        <div className="proj-links">
          {githubUrl && (
            <a className="proj-link" href={githubUrl} target="_blank" rel="noopener noreferrer">
              Código
            </a>
          )}
          {liveUrl && (
            <a className="proj-link proj-link-live" href={liveUrl} target="_blank" rel="noopener noreferrer">
              Ver ao vivo <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
