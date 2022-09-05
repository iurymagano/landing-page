import Input from "../../components/Input/Input";

export const Home = () => {
  return (
    <div className="flex w-full">
      <div className="flex h-full gap-4 flex-1 items-center justify-center">
        <div className="w-1/2 mx-auto my-0">
          <span>img</span>
          <Input
            type='text'
            className='bg-neutral-700 h-10 w-full'
          />
        </div>
      </div>
      <div className="w-1/5 bg-zinc-900 h-[100vh] rounded-l-3xl p-4">
        testet
      </div>
    </div>
  );
}