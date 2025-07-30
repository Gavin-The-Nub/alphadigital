"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";

// Replace DarkLightImageProps with a plain type for light/dark image objects
export type SimpleImage = {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
  aspectRatio?: string;
};

type DarkLightImageProps = {
  alt?: string;
  dark?: SimpleImage;
  light: SimpleImage;
  className?: string;
  width?: number;
  height?: number;
  withPlaceholder?: boolean;
  style?: React.CSSProperties;
};

export function DarkLightImage({
  alt,
  dark,
  light,
  className,
  width,
  height,
  withPlaceholder,
  style,
  ...props
}: DarkLightImageProps & { priority?: boolean }) {
  // Remove 'priority' from props before passing to <img>
  const { priority, ...imgProps } = props;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Always render light image during SSR to prevent hydration mismatch
  if (!mounted) {
    return (
      <img
        alt={light.alt ?? alt ?? ""}
        className={clsx("block", className)}
        height={height ?? light.height}
        src={light.url}
        width={width ?? light.width}
        style={style}
        {...imgProps}
      />
    );
  }

  // After hydration, render both images with proper dark/light logic
  return (
    <>
      {dark && (
        <img
          alt={dark.alt ?? alt ?? ""}
          className={clsx("hidden dark:block", className)}
          height={height ?? dark.height}
          src={dark.url}
          width={width ?? dark.width}
          style={style}
          {...imgProps}
        />
      )}
      <img
        alt={light.alt ?? alt ?? ""}
        className={clsx(dark && "dark:hidden", className)}
        height={height ?? light.height}
        src={light.url}
        width={width ?? light.width}
        style={style}
        {...imgProps}
      />
    </>
  );
}

export function DarkLightImageAutoscale(props: DarkLightImageProps) {
  const aspect = props.light.aspectRatio?.split("/").map(Number);
  const aspectRatio = aspect && aspect.length === 2 ? aspect[0] / aspect[1] : 1;
  let logoStyle;

  switch (true) {
    case aspectRatio <= 1.2:
      logoStyle = "square";
      break;
    case aspectRatio < 1.4:
      logoStyle = "4/3";
      break;
    case aspectRatio < 4:
      logoStyle = "portrait";
      break;
    default:
      logoStyle = "landscape";
      break;
  }

  return (
    <DarkLightImage
      alt="logo"
      className={clsx("w-auto max-w-[200px] object-contain", {
        "h-10": logoStyle === "square",
        "h-9": logoStyle === "4/3",
        "h-8": logoStyle === "portrait",
        "h-6": logoStyle === "landscape",
      })}
      style={{
        aspectRatio: props.light.aspectRatio,
      }}
      {...props}
    />
  );
} 