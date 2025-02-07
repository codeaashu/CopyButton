import { StarIcon } from "@radix-ui/react-icons";
import { BUTTONS } from "@/data/buttons";
import { CardComponent } from "@/components/app/card-component";
import Image from "next/image";

const ButtonGithubStar = () => {
  return (
    <a
      href="https://github.com/codeaashu/CopyButton"
      target="_blank"
      className="group relative inline-flex cursor-pointer items-center rounded-md bg-neutral-950 px-3 py-1 text-sm text-white shadow-lg shadow-neutral-500/20 transition-transform duration-300 hover:bg-neutral-800 hover:scale-105"
    >
      <StarIcon className="h-4 w-4" />
      <span className="ml-1">Star</span>
    </a>
  );
};

export const Home = () => {
  return (
    <div className="relative mx-auto min-h-screen w-full max-w-screen-lg bg-gray-900 px-2 pb-12 text-white md:px-6">
      <main>
        <section className="pt-8">
          <div className="flex flex-col items-start">
            <div className="mb-6 flex w-full items-center justify-between">
              <div>
              <Image src="/favicon.ico" alt="Favicon" width={32} height={32} />
              </div>
              <ButtonGithubStar />
            </div>
            <div className="mb-6">
              <h1 className="mb-1 text-xl font-medium text-white">
                CopyButton
              </h1>
              <div className="text-neutral-300">
                <p>
                  {`Discover a collection of Tailwind CSS buttons designed to enhance your
                  website's look.`}
                </p>
                <p>Easy to integrate with a copy-paste, no js required!</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {BUTTONS?.map((Comp) => {
              return (
                <CardComponent key={Comp.name}>
                  <Comp />
                </CardComponent>
              );
            })}
          </div>
        </section>
      </main>
      <footer>
        <div className="mb-4 mt-8 text-center text-neutral-300">
          <span className="inline-flex text-sm text-neutral-300">
            Made by{" "}
            <a
              href="https://twitter.com/warrior_aashuu"
              className="ml-1 inline-flex hover:underline"
            >
              aashu
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};