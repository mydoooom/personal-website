import { Cats } from "./cats";
import { Jokes } from "./jokes";

export function FunnyContent() {
  return (
    <>
      <div className="mt-28 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Cats />
        <Jokes />
      </div>
    </>
  );
}
