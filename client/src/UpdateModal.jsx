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
										Edit Event
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

									<div className="flex justify-around mt-4 gap-x-4">
										<button
											type="button"
											className="buttons grow bg-[#77DD77] text-black"
											onClick={savePostEdit}
										>
											Confirm
										</button>
										<button
											type="button"
											className="buttons grow bg-[#FF6961] text-black"
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
