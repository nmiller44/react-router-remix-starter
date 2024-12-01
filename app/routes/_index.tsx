

export const meta = () => {
  return [
    { title: "Not Another Remix App" },
    { name: "description", content: "Welcome to React Router" },
  ];
};

export default function Index() {
  return (
    <div className="p-8 text-lg">
        Welcome to <span className="line-through">Remix</span> React Router
    </div>
  );
}
