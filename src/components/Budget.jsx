import React from 'react'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { Progress } from './ui/progress';
import { RiDeleteBinFill } from "react-icons/ri";
import { FaRegSave } from "react-icons/fa";

const Budget = () => {
    // const percentage=
    return (
        <div className='flex flex-col items-center my-8 mx-6 w-full '>
            <form action="" className='flex flex-col gap-6'>
                <div>
                    <h1>Set Monthly Budget</h1>
                    <p>Define your spending limits and reach your financial goals.</p>
                </div>
                <div>
                    <h2>Total Monthly Budget Goal</h2>
                    <div className='flex items-center gap-2'>
                        <FaIndianRupeeSign />
                        <input type="text" placeholder='Add Budget Value' />
                    </div>
                </div>
                <div>
                    <h2 className='uppercase'>Allocation Progress</h2>
                    <h1 className='flex items-center gap-2'><FaIndianRupeeSign />______ of <FaIndianRupeeSign />______</h1>
                    <Progress />
                    <p>You have <FaIndianRupeeSign />_____ remaining to allocate to your categories.</p>
                </div>
                <div>
                    <div>
                        <h1>Category Limits</h1>
                        <button>+ Add Category</button>
                    </div>
                    <div>
                        {/* category cards */}
                        <div>
                            <div>
                                <h1><i></i>Category Name</h1>
                                <RiDeleteBinFill />
                            </div>
                            <div>
                                <FaIndianRupeeSign />
                                <input type="text" />
                            </div>
                        </div>


                    </div>
                    <button><FaRegSave /> Save Budget Plan</button>
                </div>

            </form>
        </div>
    )
}

export default Budget