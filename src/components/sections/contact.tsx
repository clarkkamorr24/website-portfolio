import ContainerMenu from "@/components/container-menu";
import AppSection from "@/components/layout/app-section";
import { contact } from "../../data/contact.json";

export default function Contact() {
  return (
    <section id="contact" className="h-full w-full">
      <div className="m-auto px-2 py-16">
        <ContainerMenu title="Contact" description="Get in Touch" />
        <AppSection title="Connect With Me">
          <div className="flex flex-wrap justify-center gap-4">
            {contact.contents.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-light-gray hover:shadow-shadow-color flex w-full max-w-full flex-col items-center justify-center rounded-lg border px-4 py-6 text-center transition duration-300 hover:shadow sm:max-w-[250px]"
              >
                <div className="border-primary grid h-12 w-12 place-items-center rounded-full border">
                  <img
                    className="icons"
                    src={item.icon}
                    alt={item.name}
                    width={30}
                    height={30}
                  />
                </div>
                <h3 className="text-primary mt-3 font-semibold">{item.name}</h3>
                <p className="text-gray text-xs md:text-sm">{item.username}</p>
              </a>
            ))}
          </div>
        </AppSection>
      </div>
    </section>
  );
}
