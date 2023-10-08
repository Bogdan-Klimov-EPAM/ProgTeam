"use client";

import { Button } from "../shared/ui/button";
import { FC, useState } from "react";
import { X, Menu } from "lucide-react";
import { Sidebar } from "components/shared/sidebar";
import { SheetClose, SheetTitle } from "components/shared/ui/sheet";
import NewBlockList from "./new-block-list";

type Props = {
  handleClickBlock: () => any;
};

const NewBlockSidebar: FC<Props> = ({ handleClickBlock }) => {
  const [open, setOpen] = useState(false);

  const handleClickBlockAndClose = () => {
    handleClickBlock();
    setOpen(false);
  };

  return (
    <Sidebar
      open={open}
      setOpen={setOpen}
      content={
        <div>
          <div className="flex items-center justify-between mb-4">
            <SheetTitle>Block library</SheetTitle>
            <SheetClose asChild>
              <Button size={"icon"}>
                <X />
              </Button>
            </SheetClose>
          </div>
          <NewBlockList
            blockVariant="blocks-list-vertical"
            handleClickBlock={handleClickBlockAndClose}
          />
        </div>
      }
      trigger={
        <Button>
          <Menu className="pr-2" />
          All blocks
        </Button>
      }
    />
  );
};

export default NewBlockSidebar;
