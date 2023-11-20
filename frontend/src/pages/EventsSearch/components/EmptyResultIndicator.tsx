export default function EmptyResultIndicator({text}:{text?:string}) {
  return (
    <div className="w-[880px] text-red-500 font-bold rounded-3xl bg-white text-center mx-auto mt-[4rem] py-1">
      {text || "No Results Availabe"}
    </div>
  );
}
