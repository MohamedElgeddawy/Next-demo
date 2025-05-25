"use client";

import { useState, useEffect } from "react";

export default function Todo({}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    // Simulate fetching todo data
    const fetchTodo = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/1`,
        {
          next : {
            
          }
        }
      );
      const data = await response.json();
      setTodo(data);
    };
    fetchTodo();
  }, []);

  return (
    <div>
      <h2>{todo.title}</h2>
    </div>
  );
}
