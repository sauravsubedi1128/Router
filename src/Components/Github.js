import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/sauravsubedi1128")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers} <br />
      Name: {data.name} <br />
      Location: {data.location} <br />
      Created At : {data.created_at} <br />
      Updated At: {data.updated_at}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;
