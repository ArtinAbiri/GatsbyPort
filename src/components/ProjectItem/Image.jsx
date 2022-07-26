import React from "react";
import cn from "classnames";

export default function Image({
  url,
  active,
  rotationPosition,
  parallaxPos,
  scale,
  opacity,
}) {
  return (
    <img
      className={cn({ active })}
      style={{
        opacity: opacity,
        transform: `translate3d(${parallaxPos.x}px, ${50}px, 0px) rotate(${rotationPosition}deg) scale(${scale}) `,
      }}
      src={url}
     alt='container for images of projects'/>
  );
}
