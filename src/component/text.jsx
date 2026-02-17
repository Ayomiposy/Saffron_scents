export default function Text({ size = "small", children }) {
  const sizes = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
    xlarge: "text-xl",
    xxlarge: "text-2xl md:text-6xl",
    hero: "text-2xl md:text-8xl",
  };

  return <p className={sizes[size]}>{children}</p>;
}
