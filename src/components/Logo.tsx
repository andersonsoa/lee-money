interface LogoProps {
  size?: string;
  innerSize?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = "text-4xl", innerSize = "text-5xl" }) => {
  return (
    <h1 className={`font-thin ${size}`}>
      <span className={`font-bold font-sedgwick text-fuchsia-600 mr-1 ${innerSize}`}>lee.</span>money
    </h1>
  );
};
