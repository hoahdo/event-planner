import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

function DeleteModal({ deleteOpen, closeDeleteConfirm, deleteConfirm }) {
	return (
		<>
			<Transition appear show={deleteOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeDeleteConfirm}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex items-center justify-center min-h-full p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#242424] p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-xl font-medium leading-6 text-white"
									>
										Delete Event
									</Dialog.Title>
									<div className="">
										<p className="pt-4 pb-4">
											Are you sure you want to delete this post? <br />
											This process cannot be undone.
										</p>
									</div>

									<div className="flex justify-around mt-4 gap-x-4">
										<button
											type="button"
											className="buttons grow bg-[#FF6961] text-black"
											onClick={deleteConfirm}
										>
											Delete
										</button>
										<button
											type="button"
											className="buttons grow bg-[#808080] text-black"
											onClick={closeDeleteConfirm}
										>
											Cancel
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}

export default DeleteModal;
