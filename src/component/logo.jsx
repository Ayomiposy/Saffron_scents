import Text from "./text";

export default function Logo() {
  return (
    <div>
      <div className="logo flex flex-col items-center justify-center font-carves gap-2 text-primary">
        {" "}
        <Text size="xlarge">SAFFR0N</Text>
        <Text size="large">SCENTS</Text>
      </div>
    </div>
  );
}
