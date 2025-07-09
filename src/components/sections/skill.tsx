import AppSection from "@/components/layout/app-section";
import { services } from "../../data/services.json";
import { skills } from "../../data/skills.json";
import type { ServicesSection } from "@/types/services";
import type { SkillItem } from "@/types/skill";
import ContainerMenu from "@/components/container-menu";

export default function Skill() {
  return (
    <div id="skills" className="h-full w-full">
      <div className="mx-auto px-2 py-16">
        <ContainerMenu title="Skills" description="Areas of Expertise" />
        <AppSection title="What can I do">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:gap-4 xl:grid-cols-3">
            {services.map((item: ServicesSection) => (
              <div
                key={item.id}
                className="border-light-gray rounded-lg border p-6"
              >
                <div className="flex items-center">
                  <img
                    className="icons"
                    src={item.icon}
                    alt={item.name}
                    width={40}
                    height={40}
                  />
                  <h3 className="text-primary ml-4 text-sm font-semibold lg:text-base">
                    {item.name}
                  </h3>
                </div>
                <div className="mt-3">
                  <p className="text-gray text-xs lg:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AppSection>
        <AppSection title="Technology Stack">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4">
            {skills.map((item: SkillItem) => (
              <div
                key={item.id}
                className="border-light-gray flex items-center rounded-lg border px-3 py-3"
              >
                <img
                  className="icons"
                  src={item.icon}
                  alt={item.name}
                  width={30}
                  height={30}
                />
                <h3 className="text-primary ml-2 text-xs font-medium md:ml-3 md:text-sm">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </AppSection>
      </div>
    </div>
  );
}
