import React from 'react'
import { Progress } from './ui/progress'
import { MdFastfood } from "react-icons/md";
import { FaLuggageCart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdListAlt } from "react-icons/md";
import { FaTv } from "react-icons/fa";
import { GiSchoolBag } from "react-icons/gi";
import { FaClinicMedical } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"



const categories = [
    {
        logo: <MdFastfood size={40} className=' py-2 px-2 rounded-lg border-2 border-orange-500 bg-orange-200 text-orange-500' />,
        name: "Food",
        amount: 1200,
        color: "bg-orange-500"
    },
    {
        logo: <FaLuggageCart size={40} className=' py-2 px-2 rounded-lg border-2 border-blue-500 bg-blue-200 text-blue-500' />,
        name: "Travel",
        amount: 800,
        color: "bg-blue-500"
    },
    {
        logo: <FaShoppingCart size={40} className=' py-2 px-2 rounded-lg border-2 border-green-500 bg-green-200 text-green-500' />,
        name: "Shopping",
        amount: 1500,
        color: "bg-green-500"
    },
    {
        logo: <MdListAlt size={40} className=' py-2 px-2 rounded-lg border-2 border-gray-500 bg-gray-200 text-gray-500' />,
        name: "Bills",
        amount: 600,
        color: "bg-gray-500"
    },
    {
        logo: <FaTv size={40} className=' py-2 px-2 rounded-lg border-2 border-purple-600 bg-purple-200 text-purple-600' />,
        logobg: "",
        name: "Entertainment",
        amount: 950,
        color: "bg-purple-500"
    },
    {
        logo: <GiSchoolBag size={40} className=' py-2 px-2 rounded-lg border-2 border-yellow-600 bg-yellow-200 text-yellow-600' />,
        logobg: "",
        name: "Education",
        amount: 1400,
        color: "bg-yellow-500"
    },
    {
        logo: <FaClinicMedical size={40} className=' py-2 px-2 rounded-lg border-2 border-pink-600 bg-pink-200 text-pink-600' />,
        logobg: "",
        name: "Health",
        amount: 700,
        color: "bg-pink-500"
    },
    {
        logo: <MdListAlt size={40} className=' py-2 px-2 rounded-lg border-2 border-indigo-600 bg-indigo-200 text-indigo-600' />,
        logobg: "",
        name: "Subscriptions",
        amount: 350,
        color: "bg-indigo-500"
    },
    {
        logo: <MdListAlt size={40} className=' py-2 px-2 rounded-lg border-2 border-teal-600 bg-teal-200 text-teal-600' />,
        logobg: "",
        name: "Groceries",
        amount: 1100,
        color: "bg-teal-500"
    },
    {
        logo: <FaHandHoldingMedical size={40} className=' py-2 px-2 rounded-lg border-2 border-red-600 bg-red-200 text-red-600' />,
        logobg: "",
        name: "Insurance",
        amount: 600,
        color: "bg-red-500"
    },
    {
        logo: <MdListAlt size={40} className=' py-2 px-2 rounded-lg border-2 border-cyan-600 bg-cyan-200 text-cyan-600' />,
        logobg: "",
        name: "Utilities",
        amount: 800,
        color: "bg-cyan-500"
    },
    {
        logo: <MdListAlt size={40} className=' py-2 px-2 rounded-lg border-2 border-lime-700 bg-lime-200 text-lime-700' />,
        logobg: "",
        name: "Investments",
        amount: 2000,
        color: "bg-lime-500"
    }

]
const visibleCatagories = categories.slice(0, 5)

const maxAmount = Math.max(...categories.map(cat => cat.amount))




const CatagoryWiseExpense = () => {
    return (
        <div className=' flex flex-col items-start gap-4 '>
            {
                visibleCatagories.map((cat) => {
                    const percentage = (cat.amount / maxAmount) * 100

                    return (
                        <div key={cat.name} className='flex gap-4 w-full'>
                            <div className='' >{cat.logo}</div>
                            <div className='flex flex-col flex-1'>
                                <div className='flex  justify-between '>
                                    <h2 className='font-semibold'>{cat.name}</h2>
                                    <h3>Rs. {cat.amount}</h3>
                                </div>
                                <Progress value={percentage} indicatorClassname={cat.color} className="mt-2" />
                            </div>
                        </div>


                    )
                })
            }
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="bg-transparent text-blue-700 font-semibold cursor-pointer hover:bg-transparent hover:underline">View All Categories</Button>
                </DialogTrigger>
                <DialogContent showCloseButton={false}>
                    <DialogHeader>
                        <DialogTitle className="text-xl font-bold">Categories</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                            <div className="flex flex-col gap-3 ">
                                {
                categories.map((cat) => {
                    const percentage = (cat.amount / maxAmount) * 100

                    return (
                        <div key={cat.name} className='flex gap-4 w-full'>
                            <div className='' >{cat.logo}</div>
                            <div className='flex flex-col flex-1'>
                                <div className='flex  justify-between '>
                                    <h2 className='font-semibold text-gray-800'>{cat.name}</h2>
                                    <h3>Rs. {cat.amount}</h3>
                                </div>
                                <Progress value={percentage} indicatorClassname={cat.color} className="mt-2" />
                            </div>
                        </div>


                    )
                })
            }
                            </div>
                            
                    </DialogDescription>
                    
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default CatagoryWiseExpense


// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"

// export function DialogNoCloseButton() {
//   return (
//     <Dialog>
//       <DialogTrigger render={<Button variant="outline">No Close Button</Button>} />
//       <DialogContent showCloseButton={false}>
//         <DialogHeader>
//           <DialogTitle>No Close Button</DialogTitle>
//           <DialogDescription>
//             This dialog doesn&apos;t have a close button in the top-right
//             corner.
//           </DialogDescription>
//         </DialogHeader>
//       </DialogContent>
//     </Dialog>
//   )
// }
