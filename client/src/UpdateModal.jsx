import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

function UpdateModal({
	isModalOpen,
	closeModal,
	updatedPost,
	postEdit,
	savePostEdit,
}) {
	return (
		<>
			<Transition appear show={isModalOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
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
						<div className="flex min-h-full items-center justify-center p-4 text-center">
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
										className="text-lg font-medium leading-6 text-white"
									>
										Update Event
									</Dialog.Title>
									<div className="form-container">
                                        <input
                                            className="input-fields"
											type="text"
											name="event"
											value={updatedPost.event ? updatedPost.event : ""}
											onChange={postEdit}
											placeholder="Event"
										/>
                                        <input
                                            className="input-fields"
											type="date"
											name="date"
											value={updatedPost.date ? updatedPost.date : ""}
											onChange={postEdit}
											placeholder="Date"
										/>
                                        <input
                                            className="input-fields"
											type="text"
											name="description"
											value={
												updatedPost.description ? updatedPost.description : ""
											}
											onChange={postEdit}
											placeholder="Description"
										/>
									</div>

									<div className="mt-4">
										<button
											type="button"
											className="rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
											onClick={savePostEdit}
										>
											Confirm
										</button>
										<button
											type="button"
											className="rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
											onClick={closeModal}
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

export default UpdateModal;
