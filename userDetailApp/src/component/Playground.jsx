import AddUser from './AddUser'
import ViewUser from './ViewUser'
import { useState } from 'react'

function Playground() {
    const [users, setUsers] = useState([])
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
                    User Management Dashboard
                </h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl">
                        <AddUser users={users} setUsers={setUsers} />
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl">
                        <ViewUser users={users} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Playground