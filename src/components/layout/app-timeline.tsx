import type { ResumeEntry } from "@/types/resume";
import type { ReactNode } from "react";

type AppTimelineProps = {
  item: ResumeEntry;
  children: ReactNode;
};

export default function AppTimeline({ item, children }: AppTimelineProps) {
  return (
    <div className="border-primary border-l px-5 py-7">
      <div className="relative">
        <span className="inline-block rounded-full border bg-orange-500/80 px-5 py-[3px] text-xs text-white">
          {item.timestamp}
        </span>
        <span className="bg-primary absolute bottom-1/2 left-[-26.5px] h-3 w-3 translate-y-1/2 transform rounded-full" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-x-12">
        <div className="col-span-2 my-2">
          <h3 className="text-base font-semibold md:text-lg">
            <span>{item.name} </span>
          </h3>
          <h4 className="text-primary text-xs lg:text-sm">{item.info}</h4>
        </div>
        <div className="col-span-3 text-justify text-xs md:text-base">
          {children}
        </div>
      </div>
    </div>
  );
}
