import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "PowerRank" },
    { name: "description", content: "Welcome to PowerRank!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h5 className="w-100 p-3 text-center text-secondary">
        This site is under construction
      </h5>
    </div>
  );
}
