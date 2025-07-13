"use client";
import clsx from "clsx";
import { CustomTooltip } from "./tooltip";
import type { ImageProps } from "next/image";

export function Author({ image, _title, priority, blurDataURL, ...props }: any) {
  return (
    <CustomTooltip content={_title}>
      <img
        alt={image?.alt ?? `Avatar for ${_title}`}
        className="size-8 rounded-full border-2 border-[--surface-primary] object-cover transition-all dark:border-[--dark-surface-primary]"
        height={image?.height}
        src={image?.url}
        width={image?.width}
        {...props}
      />
    </CustomTooltip>
  );
}

export function Avatar({ className, alt, url, aspectRatio, priority, blurDataURL, ...props }: any) {
  return (
    <img
      alt={alt ?? "Avatar"}
      className={clsx(
        "size-7 shrink-0 rounded-full border-2 border-[--surface-primary] object-cover dark:border-[--dark-surface-primary]",
        className,
      )}
      height={28}
      src={url}
      width={28}
      {...props}
    />
  );
} 