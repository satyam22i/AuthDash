import { useState, useEffect } from 'react';
import api from '../api'; 
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [search, setSearch] = useState('');
  
  
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  const [user, setUser] = useState({ name: 'User', email: '' });
  const navigate = useNavigate();

  
  useEffect(() => {
    const fetchData = async () => {
      const savedUser = JSON.parse(localStorage.getItem('user')); 
      if (savedUser) setUser(savedUser);

      try {
      
        const res = await api.get('/tasks');
        setTasks(res.data);
      } catch (err) {
        console.error("Error fetching tasks", err);
      
        if (err.response && err.response.status === 401) {
             navigate('/login');
        }
      }
    };
    fetchData();
  }, [navigate]);

  
  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    try {
     
      const res = await api.post('/tasks', { title: newTask });
      setTasks([res.data, ...tasks]);
      setNewTask('');
    } catch (err) {
      console.error(err);
    }
  };

  
  const handleDelete = async (id) => {
    try {
     
      await api.delete(`/tasks/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const startEditing = (task) => {
    setEditingId(task._id);
    setEditTitle(task.title);
  };

 
  const handleUpdate = async (id) => {
    try {
     
      const res = await api.put(`/tasks/${id}`, { title: editTitle });
      
      setTasks(tasks.map(task => (task._id === id ? res.data : task)));
      setEditingId(null);
    } catch (err) {
      console.error(err);
    }
  };

  
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  
  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">TaskMaster</h1>
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-gray-800">{user.name}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>
          <button 
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm transition"
          >
            Logout
          </button>
        </div>
      </nav>

      
      <div className="max-w-4xl mx-auto mt-10 p-6">
        
      
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            
            <input 
              type="text" 
              placeholder="🔍 Search your tasks..." 
              className="flex-1 border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

      
          <form onSubmit={handleAddTask} className="flex gap-2">
            <input 
              type="text" 
              placeholder="Add a new task..." 
              className="flex-1 border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 rounded font-semibold transition">
              Add
            </button>
          </form>
        </div>

      
        <div className="grid gap-4">
          {filteredTasks.length === 0 ? (
            <p className="text-center text-gray-500 mt-4">No tasks found.</p>
          ) : (
            filteredTasks.map((task) => (
              <div key={task._id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center transition hover:shadow-md">
                
                {editingId === task._id ? (
                 
                  <div className="flex-1 flex gap-2">
                    <input 
                      type="text" 
                      className="flex-1 border p-2 rounded"
                      value={editTitle} 
                      onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <button onClick={() => handleUpdate(task._id)} className="text-green-600 font-bold px-2">Save</button>
                    <button onClick={() => setEditingId(null)} className="text-gray-500 px-2">Cancel</button>
                  </div>
                ) : (
                
                  <>
                    <span className="text-lg text-gray-800">{task.title}</span>
                    <div className="flex gap-3">
                      <button 
                        onClick={() => startEditing(task)} 
                        className="text-blue-500 hover:text-blue-700 font-medium"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(task._id)} 
                        className="text-red-500 hover:text-red-700 font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;