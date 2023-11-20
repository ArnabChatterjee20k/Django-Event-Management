import * as Dialog from "@radix-ui/react-dialog";
import Map from "./Map";
interface props {
  children: React.ReactNode;
}

export default function MapModal({ children }: props) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-white/30 backdrop-blur-sm data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="py-5 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%]  w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white">
          <Dialog.Title className="text-xl px-5 font-bold">
            Event Venue
          </Dialog.Title>
          <hr className="my-5 border-t-2" />
          <div className="px-[25px]">
            <Map />
          </div>
          <Dialog.Close className="py-2 px-5">
            <button className="bg-black text-white rounded-lg px-4 py-2 mt-2 ml-2">
              Close
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
