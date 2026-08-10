"use client"

import { IoCameraOutline } from "react-icons/io5";

import * as React from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"


import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const EditProfileButton = () => {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger 
        render={
            <button className="text-blue-700 font-medium cursor-pointer hover:underline">
            Edit Profile
          </button>
        }>
          
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>

            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>

          <ProfileForm />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button className="text-blue-700 font-medium cursor-pointer hover:underline">
          Edit Profile
        </button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader className="text-left border-b">
          <DrawerTitle>Edit Profile</DrawerTitle>

          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>

        <ProfileForm className="p-4" />
      </DrawerContent>
    </Drawer>
  )
}

function ProfileForm({ className }) {
  return (
    <form className={cn("grid items-start gap-6", className)}>

        <div className="grid gap-3 justify-items-center">
            <div className="w-20 h-20 rounded-full border-3 border-gray-200 bg-[url('https://images.unsplash.com/vector-1754829494850-95549a50701f?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center flex items-center justify-center group">
                <IoCameraOutline size={20} className="opacity-0 group-hover:opacity-100 text-gray-50 transition-opacity duration-200" />
            </div>

            <Label className="uppercase font-bold px-2 py-2 rounded-md bg-blue-200 text-blue-700 hover:bg-blue-300  flex justify-center items-center" htmlFor="profile-photo">
                Upload New Photo
            </Label>
            <input
            id="profile-photo"
             type="file"
             accept="image/*"
             className="hidden" 
             />

        </div>
      
      <div className="grid gap-3">
        <Label className="uppercase font-bold text-gray-500" htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          defaultValue="Ishita"
        />
      </div>

      <div className="grid gap-3">
        <Label className="uppercase font-bold text-gray-500" htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          defaultValue="example@gmail.com"
        />
      </div>

      <div className="grid gap-3">
        <Label className="uppercase font-bold text-gray-500" htmlFor="bio">Bio</Label>
        <Input
          id="bio"
          type="text"
          defaultValue=""
          placeholder="Write something about yourself"
        />
      </div>

      <Button className="bg-blue-700 hover:bg-blue-800" type="submit">
        Save Changes
      </Button>

    </form>
  )
}

export default EditProfileButton





