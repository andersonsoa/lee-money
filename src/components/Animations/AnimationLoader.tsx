import React, { forwardRef, useRef } from "react";

type AnimationContainerProps = React.HTMLProps<HTMLDivElement>;

export const AnimationSpinner: React.FC = () => <div />;

export const AnimationContainer = forwardRef<HTMLDivElement, AnimationContainerProps>(({ children }, ref) => {
  return (
    <div ref={ref} className="relative w-[640px] h-[640px] m-auto mt-[-120px] mb-[-200px]">
      {children}
    </div>
  );
});
AnimationContainer.displayName = "AnimationContainer";

export const AnimationLoader = () => {
  return (
    <AnimationContainer>
      <AnimationSpinner />
    </AnimationContainer>
  );
};
