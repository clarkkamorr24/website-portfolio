type AppDecorationProps = {
  type?: "fixline" | "threeline";
};

export default function AppDecoration({
  type = "fixline",
}: AppDecorationProps) {
  switch (type) {
    case "fixline":
      return (
        <div className="fixed right-1/2 z-[-1] w-[80%] translate-x-1/2 transform 2xl:w-[1200px]">
          <div className="decoration h-screen w-full" />
        </div>
      );
    case "threeline":
      return (
        <div className="mt-2 mb-3 text-center lg:mb-5">
          <span className="bg-foreground inline-block h-5 w-[1.5px] lg:h-5 lg:w-[2px]" />
          <span className="mx-1 -mb-2 inline-block h-8 w-[1.5px] bg-orange-400 lg:mx-[5px] lg:h-9 lg:w-[2px]" />
          <span className="bg-foreground inline-block h-5 w-[1.5px] lg:h-5 lg:w-[2px]" />
        </div>
      );
    default:
      return <p>Invalid props</p>;
  }
}
