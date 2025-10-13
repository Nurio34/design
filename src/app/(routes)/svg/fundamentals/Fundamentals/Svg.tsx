import { ReactNode, SVGProps } from "react";

interface SvgProps extends SVGProps<SVGSVGElement> {
  children: ReactNode;
}

function Svg({ children, ...props }: SvgProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}>
      {children}
    </svg>
  );
}

export default Svg;
