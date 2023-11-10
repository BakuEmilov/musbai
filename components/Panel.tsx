"use client"

import { Disclosure } from "@/node_modules/@headlessui/react/dist/index";


const Panel = () => {
  return (
    <div >
      <Disclosure>
        <Disclosure.Button className="p-6 border bg-[#ff0000]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </Disclosure.Button>
        <Disclosure.Panel className="p-6 border bg-[#e9afaf]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic aliquid
          vel pariatur quas. Labore animi harum dolorem laudantium saepe
          assumenda veritatis rerum esse explicabo reiciendis sunt, numquam
          neque repellat odio.
        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
};

export default Panel;
