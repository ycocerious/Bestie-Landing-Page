// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// UI component imports
import * as Craft from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import { Dispatch, SetStateAction } from "react";

const FeatureLeft = ({
  setShowModal,
}: {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Craft.Section>
      <Craft.Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
          <Image
            src="/whatsapp_replace.jpg"
            width={1920}
            height={1080}
            alt="placeholder"
            className="fill object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="!my-0 pt-4">Replace Your Whatsapp</h3>
          <p className="font-light leading-[1.4] opacity-70">
            Avoid the clutter of all your college groups, your family groups and
            all the advertising spam you receive on whatsapp. <br /> <br />
            An app to purely just talk to the most important people in your
            life. <br /> <br />
            And no, we will not use your chats to train our ad model like a
            certain other company (ahem ahem)
          </p>
          <div className="not-prose flex items-center gap-2">
            <Button
              className="w-fit bg-gradient-to-br from-blue-500 to-purple-400 text-white cursor-pointer"
              asChild
              onClick={() => setShowModal(true)}
            >
              <div>Get Started {"->"}</div>
            </Button>
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default FeatureLeft;
