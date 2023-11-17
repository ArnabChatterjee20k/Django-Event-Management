import * as Form from "@radix-ui/react-form";
import Input from "../../../components/Input";
import Category from "./Category";

export default function SearchForm() {
  return (
    <Form.Root className="w-[600px] bg-slate-900 px-12 py-6 rounded-lg ">
      <h1 className="text-white text-4xl text-center">Events</h1>
      <hr className="my-4" />
      <Input label="keyword" type="text" message="Please enter the keyword" />
      <div className="flex items-center gap-7">
        <Input
          label="Distance(miles)"
          type="number"
          message="Please enter the distance"
        />
        <Category />
      </div>
      <Input label="Location" type="text" message="Please enter the location" />
    </Form.Root>
  );
}
