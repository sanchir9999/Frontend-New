import { FaBeer } from 'react-icons/fa';
import { MdAlarm } from 'react-icons/md';
import { AiFillAlert } from 'react-icons/ai';
import { HouseIcon } from 'lucide-react';
import { CarTaxiFrontIcon } from 'lucide-react';
import { PhoneCallIcon } from 'lucide-react';
import { HospitalIcon } from 'lucide-react';
import { UtilityPoleIcon } from 'lucide-react';
import { SchoolIcon } from 'lucide-react';
import { CloudCogIcon } from 'lucide-react';
import { FireExtinguisherIcon } from 'lucide-react';
import { FileArchiveIcon } from 'lucide-react';

import { Nemeh } from "@/assets/Nemeh";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const icons = [
    FaBeer,
    MdAlarm,
    AiFillAlert,
    HouseIcon,
    CarTaxiFrontIcon,
    PhoneCallIcon,
    HospitalIcon,
    UtilityPoleIcon,
    SchoolIcon,
    CloudCogIcon,
    FireExtinguisherIcon,
    FileArchiveIcon,
];

export const AddCategory = () => {
    return (
        <>
            <Dialog>
                <div className="border">
                    <DialogTrigger><Nemeh /> Add Category</DialogTrigger>
                </div>
                <DialogContent className="w-[494px] h-[200px]">
                    <DialogHeader>
                        <DialogTitle>Add Category</DialogTitle>
                        <DialogDescription>Select an icon for your category:</DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-4 gap-4 p-4">
                        {icons.map((Icon, index) => (
                            <div key={index} className="flex justify-center items-center">
                                <Icon size={17} />
                            </div>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};
