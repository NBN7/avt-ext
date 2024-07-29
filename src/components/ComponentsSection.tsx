import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Timeline } from '@/components/ui/timeline';
import { TIMELINE_ITEMS } from '@/constants/timelineItems';
import { Search } from 'lucide-react';

export const ComponentsSection = () => {
  return (
    <div className=" w-full h-screen flex flex-col gap-6 bg-white text-black rounded-lg mt-8 p-4">
      <Input
        id="input-example"
        className="md:w-1/3"
        label="Label example"
        placeholder="Placeholder example"
        icon={Search}
      />

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <div className="w-full flex items-center gap-12">
        <p>Example option</p>
        <Switch id="switch-example" />
      </div>

      <div className="flex items-center gap-4">
        <Checkbox id="checkbox-example" />
        <Label htmlFor="checkbox-example">Example checkbox</Label>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="md:w-40">Open dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Example title</DialogTitle>
            <DialogDescription>
              This is an example description for the dialog of auravant
              extensions.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="flex gap-2">
        <Badge variant="success">Success</Badge>
        <Badge variant="destructive">Error</Badge>
      </div>

      <Timeline items={TIMELINE_ITEMS} />
    </div>
  );
};
