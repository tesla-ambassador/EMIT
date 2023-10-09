import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  Button,
  CardBody,
  Divider,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

export default function SmallCards({ data, keyword }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7 md:col-span-1 card-glass parent_hover hover:cursor-pointer"
      >
        <CardHeader className="flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            {keyword} {data.app_ID}
          </p>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="mt-6 text-center md:text-start">
            <h2 className="text-white/95 font-medium text-xl">
              {data.app_name}
            </h2>
            <p className="mt-1 text-gray-300 lg:opacity-0 transition-all duration-150 child_hover">
              {data.app_hover}
            </p>
          </div>
        </CardBody>
        <Divider />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-default-600 dark:border-default-100 hidden lg:flex">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Hover over card</p>
              <p className="text-tiny text-white/60">for more information</p>
            </div>
          </div>
          <Button onPress={onOpen} radius="full" size="sm">
            See details
          </Button>
        </CardFooter>
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-default-600 dark:border-default-100 flex justify-center lg:hidden">
          <Button onPress={onOpen} radius="full" size="sm">
            See details
          </Button>
        </CardFooter>
      </Card>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-[#443C68] text-white">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h3>{data.app_name}</h3>
              </ModalHeader>
              <ModalBody>
                <h4>Explanation</h4>
                <p className="text-gray-300">{data.app_desc}</p>
                <h4>Significance</h4>
                <p className="text-gray-300">{data.app_significance}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
