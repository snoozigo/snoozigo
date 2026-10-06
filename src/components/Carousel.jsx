import { useRef, useState } from "react";

export function Carousel({ images, label }) {
  const [index, setIndex] = useState(0);
  const startX = useRef(null);

  function show(next) {
    const count = images.length;
    setIndex(((next % count) + count) % count);
  }

  function onPointerDown(event) {
    if (event.target.closest("button")) return;
    startX.current = event.clientX;
  }

  function onPointerUp(event) {
    if (startX.current == null) return;
    const delta = event.clientX - startX.current;
    if (delta > 48) show(index - 1);
    if (delta < -48) show(index + 1);
    startX.current = null;
  }

  return (
    <div
      className="carousel"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      {images.map((image, imageIndex) => (
        <img
          key={image.alt}
          src={image.src}
          alt={image.alt}
          className={imageIndex === index ? "is-active" : ""}
          aria-hidden={imageIndex !== index}
          draggable="false"
        />
      ))}
      <div className="carousel__dots" role="tablist" aria-label={label}>
        {images.map((image, imageIndex) => (
          <button
            key={image.alt}
            type="button"
            role="tab"
            aria-selected={imageIndex === index}
            aria-label={`Show photo ${imageIndex + 1} of ${images.length}`}
            className={imageIndex === index ? "is-active" : ""}
            onClick={() => show(imageIndex)}
          />
        ))}
      </div>
    </div>
  );
}
