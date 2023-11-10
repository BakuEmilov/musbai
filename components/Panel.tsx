"use client";

import { Disclosure } from "@/node_modules/@headlessui/react/dist/index";

interface PanelProps {
  buttonText: string;
  panelText: string;
}

const Panel: React.FC<PanelProps> = ({ buttonText, panelText }) => {
  return (
    <div>
      <Disclosure>
        <Disclosure.Button className="p-6 border bg-[#ff0000]">
          {buttonText}
        </Disclosure.Button>
        <Disclosure.Panel className="p-6 border bg-[#e9afaf]">
          {panelText}
        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
};

export default Panel;
