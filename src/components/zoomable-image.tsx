import type { DetailedHTMLProps, ImgHTMLAttributes } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

export default function ZoomableImage({
  src,
  alt,
  className,
}: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) {
  if (!src) return null;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <img
          src={src}
          alt={alt || "img"}
          sizes="100vw"
          className={className}
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={100}
        />
      </DialogTrigger>
      <DialogContent className="bg-background w-full border-0 p-1 sm:max-w-4xl">
        <ScrollArea className="relative max-h-[600px] w-full rounded-md bg-transparent shadow-md">
          <img src={src} alt={alt || "img"} className="rounded-md border" />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
