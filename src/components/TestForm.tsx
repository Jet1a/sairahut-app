"use client";

import React, { FormEvent, useEffect, useState } from "react";

const Test = () => {
  const [data, setData] = useState<string[][] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/datas", {
          method: "GET",
          
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const content = await response.json();
        setData(content.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        alert(
          "There was an error fetching the data. Please check the console for more details."
        );
      }
    };

    fetchData();
  }, []);


  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto py-16">
        {data ? (
          <div>
            <h2 className="text-xl font-bold mb-4">Data from Google Sheets:</h2>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2">Student ID</th>
                  <th className="py-2">Name</th>
                  <th className="py-2">House Name</th>
                  <th className="py-2">Hint1</th>
                  <th className="py-2">Hint2</th>
                  <th className="py-2">Hint3</th>
                  <th className="py-2">Hint4</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="py-2 px-4 border">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </main>
  );
};

export default Test;
