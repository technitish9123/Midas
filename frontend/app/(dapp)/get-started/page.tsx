import DappOnboarding from "@/components/DappOnboarding";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full h-full bg-primary-LightAzalea justify-between p-24 gap-y-20">
      <div className="bg-secondary-DarkAzalea rounded-3xl  mt-12 h-[60vh] w-full flex items-center justify-end">
        <p className="flex w-full items-center justify-center text-4xl font-extrabold text-primary-LightSKY">
          Join the Future of Digital Community Building.
        </p>
      </div>
      <DappOnboarding />
    </main>
  );
}
