import AppSection from "@/components/layout/app-section";
import AppTimeline from "@/components/layout/app-timeline";
import { resume } from "../../data/resume.json";
import type { ResumeCategory } from "@/types/resume";
import ContainerMenu from "@/components/container-menu";

export default function Resume() {
  return (
    <section id="resume" className="h-full w-full">
      <div className="mx-auto px-2 py-16">
        <div className="col-span-4">
          <ContainerMenu
            title="Resume"
            description="Experience and Education"
          />
          {resume.contents.map((item: ResumeCategory) => (
            <AppSection key={item.id} title={item.title}>
              {item.contents.map((subItem) => (
                <AppTimeline key={subItem.id} item={subItem}>
                  {subItem.description}
                  {subItem.list ? (
                    <ul className="mt-4">
                      <span className="mb-3 flex font-semibold md:mb-4">
                        Projects that I was a part of:{" "}
                      </span>
                      {subItem.list.map((listItem) => (
                        <li
                          key={listItem.id}
                          className="mb-2 list-inside list-disc"
                        >
                          <a
                            href={listItem.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-orange-400"
                          >
                            {listItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    ""
                  )}
                </AppTimeline>
              ))}
            </AppSection>
          ))}
        </div>
      </div>
    </section>
  );
}
