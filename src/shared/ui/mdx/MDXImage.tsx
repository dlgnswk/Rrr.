import React from "react";

interface MDXImageProps {
  src: string;
  alt: string;
  caption?: string;
  width?: string;
}

const MDXImage: React.FC<MDXImageProps> = ({ src, alt, caption, width }) => {
  return (
    <figure className="w-full">
      <img
        src={src}
        alt={alt}
        style={width ? { width } : { width: "100%" }}
        className="mx-auto"
      />
      {caption && (
        <figcaption className="text-center text-sm text-gray-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default MDXImage;
