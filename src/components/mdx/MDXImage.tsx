import React from "react";

interface MDXImageProps {
  src: string;
  alt: string;
  caption?: string;
}

const MDXImage: React.FC<MDXImageProps> = ({ src, alt, caption }) => {
  return (
    <figure>
      <img src={src} alt={alt} style={{ maxWidth: "100%", height: "auto" }} />
      {caption && (
        <figcaption
          style={{ color: "#666", textAlign: "center", marginTop: "8px" }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default MDXImage;
