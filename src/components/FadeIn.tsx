import React, {
    JSXElementConstructor,
    PropsWithChildren,
    useEffect,
    useState,
    useRef
  } from "react";
  
  interface Props {
    delay?: number;
    transitionDuration?: number;
    wrapperTag?: JSXElementConstructor<any> | string;
    childTag?: JSXElementConstructor<any> | string;
    className?: string;
    childClassName?: string;
    visible?: boolean;
    onComplete?: () => any;
    direction?: 'up' | 'left' | 'right';
  }
  
  export default function FadeIn(props: PropsWithChildren<Props>) {
    const { children, onComplete } = props;
    const childrenCount = React.Children.count(children);
    const [maxIsVisible, setMaxIsVisible] = useState(0);
    const [hasIntersected, setHasIntersected] = useState(false);
    const transitionDuration = props.transitionDuration || 800; // Slower for dramatic effect
    const delay = props.delay || 100;
    const WrapperTag = props.wrapperTag || "div";
    const ChildTag = props.childTag || "div";
    const visible = typeof props.visible === "undefined" ? true : props.visible;
    const direction = props.direction || 'up';
  
    const wrapperRef = useRef<HTMLElement>(null);
  
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasIntersected(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 } // Wait a bit longer before triggering
        );
  
        if (wrapperRef.current) {
            observer.observe(wrapperRef.current);
        }
  
        return () => observer.disconnect();
    }, []);
  
    useEffect(() => {
      if (!hasIntersected) return;
  
      let count = childrenCount;
      if (!visible) {
        count = 0;
      }
  
      if (count === maxIsVisible) {
        const timeout = setTimeout(() => {
          if (onComplete) onComplete();
        }, transitionDuration);
        return () => clearTimeout(timeout);
      }
  
      const increment = count > maxIsVisible ? 1 : -1;
      const timeout = setTimeout(() => {
        setMaxIsVisible(maxIsVisible + increment);
      }, delay);
      return () => clearTimeout(timeout);
    }, [
      childrenCount,
      delay,
      maxIsVisible,
      visible,
      transitionDuration,
      hasIntersected,
      onComplete,
    ]);
  
    const getTransform = () => {
        if (direction === 'left') return 'translateX(-150px)';
        if (direction === 'right') return 'translateX(150px)';
        return 'translateY(50px)';
    };

    return (
      <WrapperTag ref={wrapperRef as any} className={props.className}>
        {React.Children.map(children, (child, i) => {
          return (
            <ChildTag
              className={props.childClassName}
              style={{
                transition: `opacity ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1), transform ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
                transform: maxIsVisible > i ? "none" : getTransform(),
                opacity: maxIsVisible > i ? 1 : 0,
              }}
            >
              {child}
            </ChildTag>
          );
        })}
      </WrapperTag>
    );
  }