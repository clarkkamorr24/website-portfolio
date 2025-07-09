import { Fragment } from "react";
import ContainerMenu from "@/components/container-menu";
import AppSection from "@/components/layout/app-section";
import AppProject from "@/components/layout/app-project";
import { project } from "../../data/project.json";
import type { ProjectItem } from "@/types/project";

export default function Projects() {
  const personalProjects = project.contents.filter(
    (item) => item.category === "Personal",
  ) as ProjectItem[];

  const workProjects = project.contents.filter(
    (item) => item.category === "Work",
  ) as ProjectItem[];

  return (
    <section id="projects" className="h-full w-full">
      <div className="mx-auto px-2 py-16">
        <ContainerMenu title="Projects" description="Works & Creations" />
        <AppSection title="Work Projects">
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {workProjects.map((item) => (
              <Fragment key={item.id}>
                <AppProject project={item} />
              </Fragment>
            ))}
          </div>
        </AppSection>
        <AppSection title="Personal Projects">
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {personalProjects.map((item) => (
              <AppProject key={item.id} project={item} />
            ))}
          </div>
        </AppSection>
      </div>
    </section>
  );
}
