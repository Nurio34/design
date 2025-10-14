import { CSSProperties } from "react";
import Svg from "./Svg";
import "./index.css";

function Client() {
  return (
    <section id="Fundamentals" className="min-h-full px-[5vw] py-[5vh]">
      <div className="flex flex-wrap items-center justify-center gap-x-[5vw] gap-y-[5vh]">
        <Svg width={100} height={100}>
          <circle cx={50} cy={50} r={50} fill="red" />
        </Svg>
        <Svg>
          <rect
            x={0}
            y={0}
            rx={"10%"}
            ry={"10%"}
            width={300}
            height={150}
            fill="black"
            fillOpacity={0.7}
            strokeWidth={8}
            stroke="blue"
            strokeOpacity={0.7}
            opacity={0.7}
          />
          <circle cx={150} cy={75} r={50} fill="firebrick" />
          <text
            x={150}
            y={75 + 8}
            textAnchor="middle"
            fontSize={16}
            fill="white"
          >
            SVG
          </text>
        </Svg>
        <Svg>
          <ellipse rx={150} ry={60} cx={150} cy={60} fill="red" />
          <ellipse rx={120} ry={55} cx={135} cy={60} fill="white" />
          <ellipse rx={120} ry={40} cx={150} cy={85} fill="yellow" />
          <ellipse rx={90} ry={35} cx={135} cy={85} fill="white" />
          <ellipse rx={90} ry={20} cx={150} cy={110} fill="orange" />
          <ellipse rx={60} ry={15} cx={135} cy={110} fill="white" />
        </Svg>
        <Svg width={100} height={100}>
          <line
            x1={0}
            y1={0}
            x2={100}
            y2={100}
            stroke="black"
            strokeWidth={8}
          />
        </Svg>
        <Svg>
          <polygon
            points="8,75 200,8 292,50 150,142 "
            fill="red"
            stroke="blue"
            strokeWidth={8}
          />
        </Svg>
        <Svg width={100} height={100}>
          <polygon
            points="0,40 100,40 20,100 50,0 80,100"
            stroke="firebrick"
            strokeWidth={0}
            fill="firebrick"
            fillRule="evenodd"
          />
        </Svg>
        <Svg width={200} height={80}>
          <polyline
            points="0,50 30,50 50,45 60,20 70,80 80,50 100,50 130,45 140,25 150,75 160,50 200,50"
            fill="none"
            stroke="blue"
            strokeWidth={2}
          />
        </Svg>
        <Svg>
          <path
            d="M 0 150  Q 225 0 300 150"
            stroke="red"
            strokeWidth={2}
            fill="none"
          />
        </Svg>
        <Svg width={100} height={100} viewBox="0 0 100 100">
          <defs>
            <linearGradient
              id="grad"
              x1={"0"}
              x2={"100%"}
              y1={"0%"}
              y2={"100%"}
            >
              <stop offset={"0%"} stopColor="yellow" />
              <stop offset={"50%"} stopColor="red" />
            </linearGradient>
          </defs>
          <circle cx={50} cy={50} r={25} fill="orange" />
          {/* <line
            x1={50}
            y1={20}
            x2={50}
            y2={4}
            strokeWidth={6}
            stroke="black"
            strokeLinecap="round"
            id="SunLine"
          /> */}
          <path
            id="SunPath"
            d="M50 18 L50 4"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth={6}
          />
          {Array(8)
            .fill("#")
            .map((_, ind) => (
              <use
                key={ind}
                href="#SunPath"
                style={{ "--index": ind } as CSSProperties}
              />
            ))}
        </Svg>
      </div>
    </section>
  );
}
export default Client;
