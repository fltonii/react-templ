export default function App() {
  return (
    <div className="relative bg-white flex flex-col items-start pl-10 pt-10">
      <h1 className="text-3xl font-bold underline bg-red ">Template</h1>

      <h2 className="text-1m pt-5">This is a template with</h2>
      <ul className="list-disc list-inside m-2">
        <li>
          <h2 className="text-sm inline font-mono">React</h2>
        </li>
        <li>
          <h2 className="text-sm inline font-mono">Webpack</h2>
        </li>
        <li>
          <h2 className="text-sm inline font-mono">Typescript</h2>
        </li>
        <li>
          <h2 className="text-sm inline font-mono">Tailwind CSS</h2>
        </li>
      </ul>
    </div>
  );
}
