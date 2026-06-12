import { MainNav } from "./main-nav";
import { ModeToggle } from "./mode-toggle";

export function SiteHeader() {
  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 pt-10 pb-4">
        <MainNav />
        <ModeToggle />
      </div>
    </header>
  );
}
