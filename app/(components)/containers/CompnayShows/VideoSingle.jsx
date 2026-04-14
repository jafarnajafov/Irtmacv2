import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ChakraProvider,
} from "@chakra-ui/react";

const VideoSingle = ({ picture, item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ChakraProvider>
        <div className="col-span-4 lg:col-span-6 md:col-span-12 ">
          <div className="relative company_content overflow-hidden trans">
            <img src={picture} alt="img" className="img-fluid" />
            <div
              onClick={onOpen}
              className="absolute cursor-pointer download trans top-[50%] left-[50%] capitalize translate-x-[-50%] translate-y-[-50%] opacity-0 invisible text-white gap-3"
            >
              <span className=" bg-[#E1251B] text-white p-4 block rounded-full mb-3 cursor-pointer ">
                <img src="/play.svg" alt="img" />
              </span>
            </div>
          </div>
        </div>
        <Modal isOpen={isOpen} onClose={onClose} isCentered size={"xl"}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton className="bg-red-400 right-[-40px] lg:right-0 !top-[-40px] text-white " />
            <ModalBody className="  overflow-hidden !p-0 !m-0 w-full ">
              <iframe
                height="315"
                src={item?.link}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                className="!w-full"
              ></iframe>
            </ModalBody>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    </>
  );
};

export default VideoSingle;
