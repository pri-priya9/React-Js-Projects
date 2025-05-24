import React, { useState } from 'react';

function AddUser({ users, setUsers }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skill, setSkill] = useState("");

  const addUser = () => {
    if (!name || !email || !skill) {
      alert("Please fill in all fields");
      return;
    }

    const newObj = {
      id: Date.now().toString(),
      name: name,
      email: email,
      skill: skill
    };

    setUsers([...users, newObj]);
    setName("");
    setEmail("");
    setSkill("");
  };

  return (
    <div className="flex justify-center items-center min-h-[50vh] px-4 py-8 sm:py-12">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">
          Add New User
        </h2>
        <div className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>
          
          <div>
            <label htmlFor="skill" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Skill
            </label>
            <input
              id="skill"
              type="text"
              placeholder="Web Development"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>
          
          <button
            onClick={addUser}
            disabled={!name || !email || !skill}
            className="w-full mt-4 py-3 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold shadow-md transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddUser;