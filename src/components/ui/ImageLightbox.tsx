'use client';
import * as React from "react"
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Image from "next/image";

const ImageLightbox = ({ images }: { images: any[] }) => {
  const [open, setOpen] = React.useState(false);
  const [currentSlides, setCurrentSlides] = React.useState<any[]>([]);
  const handleOpenGallery = (slides: any[]) => {
    setCurrentSlides(slides);
    setOpen(true);
  };

  return (
    <div className="flex flex-wrap gap-[25px] justify-between">
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={currentSlides}
      />

      {images.map((image) => (
        <Image
          key={image.src}
          className="w-[200px] flex-grow first:w-full cursor-pointer rounded-lg shadow-xl shadow-neutral-300"
          onClick={() => handleOpenGallery(images)}
          src={image.src}
          alt="Preview"
          width={650}
          height={420}
        />
      ))
      }

    </div>
  )
};

export default ImageLightbox;