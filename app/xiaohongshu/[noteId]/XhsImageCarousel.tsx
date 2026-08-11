"use client";

import Image from "next/image";
import { useState, type KeyboardEvent } from "react";
import type { PortfolioImage } from "../../portfolio-data";

export function XhsImageCarousel({ images, title }: { images: PortfolioImage[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageCount = images.length;
  const stageRatio = images[0]?.aspectRatio ?? "3 / 4";

  const showPrevious = () => setActiveIndex((current) => (current - 1 + imageCount) % imageCount);
  const showNext = () => setActiveIndex((current) => (current + 1) % imageCount);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }
  };

  return (
    <section
      className="xhs-carousel-section"
      aria-labelledby="xhs-carousel-heading"
      aria-roledescription="轮播图"
      onKeyDown={handleKeyDown}
    >
      <p className="eyebrow" id="xhs-carousel-heading">IMAGES / 图片</p>
      <div className="xhs-carousel-stage" style={{ aspectRatio: stageRatio }}>
        {images.map((image, index) => image.src ? (
          <Image
            className={`xhs-carousel-image ${index === activeIndex ? "is-active" : ""}`}
            key={image.src}
            src={image.src}
            alt={index === activeIndex ? image.alt : ""}
            aria-hidden={index !== activeIndex}
            fill
            sizes="(max-width: 760px) 94vw, 720px"
            priority={index === 0}
            style={{ objectFit: "contain" }}
            unoptimized
          />
        ) : (
          <div
            className={`xhs-detail-placeholder ${index === activeIndex ? "is-active" : ""}`}
            role="img"
            aria-label={image.alt}
            aria-hidden={index !== activeIndex}
            key={`${image.placeholder}-${index}`}
          >
            <span aria-hidden="true">▧</span>
            <p>{image.placeholder}</p>
          </div>
        ))}

        {imageCount > 1 ? (
          <>
            <button className="xhs-carousel-arrow is-previous" type="button" onClick={showPrevious} aria-label="查看上一张图片">←</button>
            <button className="xhs-carousel-arrow is-next" type="button" onClick={showNext} aria-label="查看下一张图片">→</button>
          </>
        ) : null}
      </div>

      {imageCount > 1 ? (
        <div className="xhs-carousel-status">
          <span aria-live="polite">{String(activeIndex + 1).padStart(2, "0")} / {String(imageCount).padStart(2, "0")}</span>
          <div className="xhs-carousel-dots" aria-label={`${title}图片选择`}>
            {images.map((image, index) => (
              <button
                className={index === activeIndex ? "is-active" : ""}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`查看第 ${index + 1} 张图片`}
                aria-current={index === activeIndex ? "true" : undefined}
                key={`${image.src || image.placeholder}-dot`}
              />
            ))}
          </div>
          <small>点击左右箭头或按键盘方向键切换</small>
        </div>
      ) : null}
    </section>
  );
}
