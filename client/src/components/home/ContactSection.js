import { PiUser } from "react-icons/pi";
import { PiEnvelopeSimple } from "react-icons/pi";
import { PiPhone } from "react-icons/pi";
import { PiChatText } from "react-icons/pi";
import ButtonLoadingSpinner from "../loader/ButtonLoadingSpinner";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ContactSection = () => {

    const [isSending, setIsSending] = useState(false);

    const {register, formState:{errors}, handleSubmit} = useForm({mode:'all'});

    const handleMessageSend = (data) => {
        //event.preventDefault();
        console.log(data);
    }

    return(
        <div className="container mx-auto px-4">
            <div className="pt-28 pb-10">
                <h5 className="uppercase text-4xl text-ksC2">Contact with us</h5>
                <h3>Feel free to write our experts</h3>
            </div>
            <div className="grid grid-cols-3 gap-3 pb-20">
                <form onSubmit={handleSubmit(handleMessageSend)}>
                    <div className="mt-4">
                        <div className="flex items-center space-x-2">
                            <PiUser className="text-gray-600" />
                            <label className="block text-sm font-medium text-gray-500">Name</label>
                        </div>
                        <input
                            {...register("contactName",{
                                required:"Please fill out name field"
                            })}
                        type="text" className="mt-1 block w-full rounded-md border border-gray-300 p-1 outline-none" />
                        <p className="text-ksC1 text-xs mt-1">{errors.contactName?.message}</p>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center space-x-2">
                            <PiEnvelopeSimple className="text-gray-600" />
                            <label className="block text-sm font-medium text-gray-500">Email</label>
                        </div>
                        <input
                            {...register("contactEmail",{
                                required:"Please fill out email field",
                                pattern: {
                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    message: "Email is not valid."
                                }
                            })}
                        type="text" className="mt-1 block w-full rounded-md border border-gray-300 p-1 outline-none" />
                        <p className="text-ksC1 text-xs mt-1">{errors.contactEmail?.message}</p>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center space-x-2">
                            <PiPhone className="text-gray-600" />
                            <label className="block text-sm font-medium text-gray-500">Phone</label>
                        </div>
                        <input
                            {...register("contactPhone",{
                                required:"Please fill out phone field"
                            })}
                        type="text" className="mt-1 block w-full rounded-md border border-gray-300 p-1 outline-none" />
                        <p className="text-ksC1 text-xs mt-1">{errors.contactPhone?.message}</p>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center space-x-2">
                            <PiChatText className="text-gray-600" />
                            <label className="block text-sm font-medium text-gray-500">Message</label>
                        </div>
                        <input
                            {...register("contactMessage",{
                                required:"Please fill out message field"
                            })}
                        type="text" className="mt-1 block w-full rounded-md border border-gray-300 p-1 outline-none" />
                        <p className="text-ksC1 text-xs mt-1">{errors.contactMessage?.message}</p>
                    </div>
                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                        <button type="submit" className={`inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none sm:ml-3 sm:w-auto sm:text-sm ${
                            isSending
                            ? "cursor-not-allowed bg-gray-400"
                            : "bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        }`}>
                            {isSending ? ( <ButtonLoadingSpinner loadingText={"Sending..."}/>):(<span>Send Message</span>)}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactSection;