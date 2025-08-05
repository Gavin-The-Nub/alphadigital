"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";

// Video object type
export type SimpleVideo = {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
};

type DarkLightVideoProps = {
  alt?: string;
  dark?: SimpleVideo;
  light: SimpleVideo;
  className?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
};

export function DarkLightVideo({
  alt,
  dark,
  light,
  className,
  width,
  height,
  style,
  controls = true,
  autoPlay = false,
  muted = true,
  loop = false,
  playsInline = true,
  ...props
}: DarkLightVideoProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Always render light video during SSR to prevent hydration mismatch
  if (!mounted) {
    return (
      <video
        alt={light.alt ?? alt ?? ""}
        className={clsx("block w-full h-auto", className)}
        width={width ?? light.width}
        height={height ?? light.height}
        style={style}
        controls={controls}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        {...props}
      >
        <source src={light.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }

  // After hydration, render both videos with proper dark/light logic
  return (
    <>
      {dark && (
        <video
          alt={dark.alt ?? alt ?? ""}
          className={clsx("hidden dark:block w-full h-auto", className)}
          width={width ?? dark.width}
          height={height ?? dark.height}
          style={style}
          controls={controls}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          {...props}
        >
          <source src={dark.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <video
        alt={light.alt ?? alt ?? ""}
        className={clsx(dark && "dark:hidden", "w-full h-auto", className)}
        width={width ?? light.width}
        height={height ?? light.height}
        style={style}
        controls={controls}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        {...props}
      >
        <source src={light.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
} 