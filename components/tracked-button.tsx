"use client";

import { Button, ButtonLink } from "@/components/common/button";

interface TrackProps {
  analyticsKey: any;
  name: string;
}

type TrackedButtonProps = React.ComponentProps<typeof Button> & TrackProps;

export const TrackedButton = ({
  analyticsKey,
  children,
  onClick,
  name,
  ref,
  ...props
}: TrackedButtonProps) => {
  const sendEvent = () => {};
  return (
    <Button
      {...props}
      ref={ref}
      onClick={(e) => {
        sendEvent();
        if (onClick) {
          onClick(e);
        }
      }}
    >
      {children}
    </Button>
  );
};

type TrackedButtonLinkProps = React.ComponentProps<typeof ButtonLink> & TrackProps;

export const TrackedButtonLink = ({
  analyticsKey,
  children,
  onClick,
  name,
  ref,
  ...props
}: TrackedButtonLinkProps) => {
  const sendEvent = () => {};
  return (
    <ButtonLink
      {...props}
      ref={ref}
      onClick={(e) => {
        sendEvent();
        if (onClick) {
          onClick(e);
        }
      }}
    >
      {children}
    </ButtonLink>
  );
};
