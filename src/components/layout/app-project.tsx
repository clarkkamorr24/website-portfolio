import type { ProjectItem } from "@/types/project";
import ZoomableImage from "@/components/zoomable-image";

type AppProjectProps = {
  project: ProjectItem;
};

export default function AppProject({ project }: AppProjectProps) {
  return (
    <div className="border-light-gray bg-background overflow-hidden rounded-lg border px-4 pt-6 text-center">
      <div className="mb-3">
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <h3 className="hover:text-primary text-primary text-base font-semibold transition duration-300 lg:text-xl">
            {project.name}
          </h3>
        </a>
        <p className="text-gray text-xs">{project.stack}</p>
      </div>
      <div className="max-h-[200px] shadow-xl">
        <ZoomableImage
          src={project.image}
          alt={project.name}
          className="translate-y-5 transform cursor-pointer transition duration-300 hover:translate-y-0"
        />
      </div>
    </div>
  );
}
