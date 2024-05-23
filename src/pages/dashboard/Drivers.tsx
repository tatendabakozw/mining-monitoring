import { InformationCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import DashboardLayout from "@layouts/DashboardLayout";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import PrimaryButton from "@components/buttons/PrimaryButton";
import { Link } from "react-router-dom";
import Clock from "@components/clock/Clock";

type Props = {};

const Drivers = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const drivers = [
    {
      name: "Tatenda Bako",
      bus: "43RETSD",
      status: "in-route",
      _id: "aadsf233",
    },
    {
      name: "Maxwell Muvhi",
      bus: "FERERSS",
      status: "stationary",
      _id: "ad4SSdsf",
    },
    {
      name: "Tadiwa Muswe",
      bus: "DSD3AAS",
      status: "in-route",
      _id: "cvsasd2",
    },
    { name: "Mike Minda", bus: "6DFSDDF", status: "in-route", _id: "vadsf230" },
  ];
  return (
    <DashboardLayout>
      <div className="flex flex-col p-6 space-y-4">
        <div className="flex flex-row items-center ">
          <div className="text-5xl text-slate-900 font-bold flex-1">
            Drivers List
          </div>
          <div className="flex">
            <Clock />
          </div>
        </div>
        <div className="grid grid-cols-6 py-2 text-sm font-medium border-t items-center border-slate-200 border-b text-slate-500">
          <div className="col-span-1">Truck</div>
          <div className="col-span-2">Name</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-1">Action</div>
        </div>
        {drivers.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-6 py-2 text-sm font-medium items-center text-slate-500"
          >
            <div className="col-span-1">{item.bus}</div>
            <div className="col-span-2 flex flex-row items-center space-x-4">
              {/* @ts-ingore */}
              {/* <Avatar size={"xs"} name="tatenda bako" /> */}
              <p className="text-slate-500 font-medium text-sm">{item.name}</p>
            </div>
            <div className="col-span-1 flex">
              <p className="bg-green-100 rounded px-2 py-1 text-green-900 text-xs">
                In Route
              </p>
            </div>
            <div className="col-span-1">
              <div className="flex">
                <>
                  <div
                    // onClick={onOpen}
                    className="flex cursor-pointer p-2 rounded-full bg-slate-50"
                  >
                    <TrashIcon height={16} width={16} />
                  </div>
                  <Link
                    className="flex cursor-pointer p-2 rounded-full bg-slate-50"
                    to="/dashboard/driver-info"
                  >
                    <InformationCircleIcon height={16} width={16} />
                  </Link>

                  {/* <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Delete Item</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        asdakhflkjsdhfkj
                      </ModalBody>

                     <PrimaryButton text="Delete Item" />
                    </ModalContent>
                  </Modal> */}
                </>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Drivers;
