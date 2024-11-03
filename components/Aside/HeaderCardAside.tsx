import { Badge } from "@/components/ui/badge";
import { CardHeader } from "@/components/ui/card";
import Image from "next/image";

type ImageInfo = {
  src: string;
  alt: string;
};

type HeaderCardAsideProps = {
  imageInfo: ImageInfo;
  primarySkills: string[];
};

export function HeaderCardAside({
  imageInfo,
  primarySkills,
}: HeaderCardAsideProps) {
  return (
    <CardHeader className="relation flex justify-start items-center gap-3 sm:gap-4 xl:flex-col">
      <Image
        src={imageInfo.src}
        alt={imageInfo.alt}
        className="bg-muted border border-border rounded-2xl sm:rounded-3xl sm:w-32 sm:h-auto xl:w-40 xl:h-auto"
        height={80}
        width={80}
      />
      <p className="text-muted-foreground text-xl font-medium whitespace-pre-line mb-2">
        {imageInfo.alt}
      </p>
      <div className="flex flex-col items-center gap-2">
        {primarySkills.map((skill: string) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </CardHeader>
  );
}
