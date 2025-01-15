'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { FilterIcon } from "lucide-react"
  






export default function FilterModal(){

    return (
    <Dialog  >
    <DialogTrigger className="border p-2 rounded">
        <FilterIcon size={24}/>
    </DialogTrigger>
    <DialogContent >
        <DialogHeader>
        <DialogTitle>Filter</DialogTitle>
        <DialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
        </DialogDescription>
        </DialogHeader>

        {/* Category */}
        <Select>
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
        </SelectContent>
        </Select>

    </DialogContent>
    </Dialog>
    )
}