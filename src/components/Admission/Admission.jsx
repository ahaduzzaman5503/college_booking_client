import React, { useRef } from "react";
import { useLoaderData } from "react-router-dom";

const handleAddToy = (event, collageData) => {
  event.preventDefault();
  const sname = event.target.sname.value;
  const subject = event.target.subject.value;
  const email = event.target.email.value;
  const number = event.target.number.value;
  const address = event.target.address.value;
  const dob = event.target.dob.value;
  const photoUrl = event.target.photoUrl.value;

  const admission = {
    sname,
    subject,
    email,
    number,
    address,
    dob,
    photoUrl,
    collageData, // Add the collage data here
  };
  console.log(admission);

  fetch("http://localhost:5000/admissiondata", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(admission),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      if (data.acknowledged === true) {
        alert("Admission Successfully");
      }
    });
};

const Admission = () => {
  const collageName = useLoaderData([]);
  const modalRef = useRef(null);
  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <div className="container mx-auto ">
      <div className="container mx-auto flex justify-center my-5 ">
        <div className="w-3/4 text-sm font-medium text-gray-900 bg-white border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white shadow-2xl my-6 border-gray-50 border-3">
          <div className="bg-blue-400 p-3 my-3 rounded ">
            <h1 className="text-2xl font-bold text-black text-center">
              Click your Choose Collage
            </h1>
          </div>
          {collageName.map((college, index) => (
            <p
              key={index}
              className=" block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
              onClick={() => window.my_modal_3.showModal()}
            >
              {college.college_name}
            </p>
          ))}
        </div>
      </div>
      {/* Modal */}
      <dialog ref={modalRef} id="my_modal_3" className="modal">
        <div className="modal-box">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closeModal}
          >
            ✕
          </button>
          <div className="container mx-auto border p-5 bg-gray-800 shadow-2xl rounded-lg my-10">
            <form onSubmit={(event) => handleAddToy(event, collageName)}>
              <div className="bg-blue-400 p-3 my-3 rounded ">
                <h1 className="text-2xl font-bold text-black text-center">
                  Admission Form Fillup
                </h1>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {/* Candidate Name */}
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Candidate Name
                  </label>
                  <input
                    type="text"
                    id="sname"
                    name="sname"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Candidate Name"
                    required
                  />
                </div>

                {/* Subject */}
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Subject"
                    required
                  />
                </div>

                {/* Candidate Email */}
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Candidate Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Candidate Email"
                    required
                  />
                </div>

                {/* Phone number */}
                <div className="mb-6">
                  <label
                    htmlFor="number"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone number
                  </label>
                  <input
                    type="number"
                    id="number"
                    name="number"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Phone number"
                    required
                  />
                </div>

                {/* address */}
                <div className="mb-6">
                  <label
                    htmlFor="address"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="address"
                    required
                  />
                </div>

                {/* date of birth */}
                <div className="mb-6">
                  <label
                    htmlFor="dob"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Date of Birth
                  </label>
                  <input
                    type="text"
                    id="dob"
                    name="dob"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="date of birth"
                    required
                  />
                </div>

                {/* Picture URL */}
                <div className="mb-6">
                  <label
                    htmlFor="photoUrl"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Picture Url
                  </label>
                  <input
                    type="text"
                    id="photoUrl"
                    name="photoUrl"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Toy Photo Url"
                    required
                  />
                </div>
              </div>

              <input
                type="hidden"
                name="collageData"
                value={JSON.stringify(collageName)}
              />

              <div className="flex justify-center">
                <button
                  onClick={closeModal}
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Admission;
