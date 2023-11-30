import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FiUser, FiMapPin, FiEdit } from "react-icons/fi";

const ProfileUpdateModal = ({user, isOpen, onClose}) => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [role, setRole] = useState(user.role??'');

    return(
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 z-50" onClose={onClose}>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30"/>
                </Transition.Child>
                <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <div className="inline-block w-full transform overflow-hidden rounded-md bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:p-6 sm:align-middle md:max-w-xl">
                    <div className="w-full">
                        <div className="mt-3 text-center sm:mt-0 sm:text-left">
                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">Update Profile</Dialog.Title>
                            <div className="mt-4">
                                <div className="flex items-center space-x-2">
                                    <FiUser className="text-gray-600" />
                                    <label className="block text-sm font-medium text-gray-700">User</label>
                                </div>
                                <input type="text" className="mt-1 block w-full rounded-md border-b border-gray-300 p-2 outline-none" value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="mt-4">
                                <div className="flex items-center space-x-2">
                                    <FiMapPin className="text-gray-600" />
                                    <label className="block text-sm font-medium text-gray-700">Location</label>
                                </div>
                                <input type="text" className="mt-1 block w-full rounded-md border-b border-gray-300 p-2 outline-none" value={location} onChange={(e) => setLocation(e.target.value)}
                                />
                            </div>
                            {user.role === 'admin'? (
                                <div className="mt-4">
                                    <div className="flex items-center space-x-2">
                                        <FiMapPin className="text-gray-600" />
                                        <label className="block text-sm font-medium text-gray-700">Role</label>
                                    </div>
                                    <select value={role} onChange={(e)=>setRole(e.target.value)}>
                                        <option value='general'>general</option>
                                        <option value='moderator'>moderator</option>
                                        <option value='admin'>admin</option>
                                    </select>
                                </div>
                            ):''}
                        </div>
                    </div>
                </div>
                </Transition.Child>
            </Dialog>
        </Transition.Root>
    )
}

export default ProfileUpdateModal;