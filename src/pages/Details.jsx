/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate, useParams } from "react-router-dom";
import sun from "../assets/sun.png";
import img1 from "../assets/mercury.png";
import img2 from "../assets/venus.png";
import img3 from "../assets/world.png";
import img4 from "../assets/mars.png";
import img5 from "../assets/jupiter.png";
import img6 from "../assets/saturn.png";
import img7 from "../assets/uranus.png";
import img8 from "../assets/neptune.png";
import React, { useEffect, useState } from "react";
import Star from "../components/Star";
export default function Details() {
  const data = [
    {
      id: "0",
      name: "sun",
      description:
        "The Sun is the star at the center of our solar system and is responsible for the Earth's climate and weather. The Sun is the star at the center of our solar system and is responsible for the Earth's climate and weather. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process. The Sun has a diameter of about 1.39 million kilometers and is about 109 times the diameter of Earth.",
      img: sun,
    },
    {
      id: "1",
      name: "mercury",
      description:
        "Mercury is the smallest planet in our solar system and is known for its short years, long days, extreme temperatures, and weird sunsets. Mercury is the smallest planet in our solar system and is known for its short years, long days, extreme temperatures, and weird sunsets. It orbits the Sun at a distance of about 36 million miles (58 million kilometers) and has a diameter of about 4,880 kilometers.",
      img: img1,
    },
    {
      id: "2",
      name: "venus",
      description:
        "Venus is the second planet from the sun and is known for its bright light in the sky. Mercury is the smallest planet in our solar system and is known for its short years, long days, extreme temperatures, and weird sunsets. It orbits the Sun at a distance of about 36 million miles (58 million kilometers) and has a diameter of about 4,880 kilometers.",
      img: img2,
    },
    {
      id: "3",
      name: "earth",
      description:
        "Earth is the third planet from the sun and is the only planet known to support life. Earth is the third planet from the Sun and is the only planet known to support life. It has a diverse environment with oceans, continents, and an atmosphere that sustains life. Earth has a diameter of about 12,742 kilometers and orbits the Sun at an average distance of about 93 million miles (150 million kilometers)",
      img: img3,
    },
    {
      id: "4",
      name: "mars",
      description:
        "Mars is the fourth planet from the sun and is known for its red color. Mars is the fourth planet from the Sun and is known for its red color, caused by iron oxide on its surface. It has a thin atmosphere composed mainly of carbon dioxide. Mars has a diameter of about 6,779 kilometers and orbits the Sun at a distance of about 142 million miles (228 million kilometers)",
      img: img4,
    },
    {
      id: "5",
      name: "jupiter",
      description:
        "Jupiter is the fifth planet from the sun and is the largest planet in our solar system.Jupiter is the fifth planet from the Sun and is the largest planet in our solar system. It is a gas giant with no solid surface and is mainly composed of hydrogen and helium. Jupiter has a diameter of about 139,822 kilometers and orbits the Sun at a distance of about 484 million miles (778 million kilometers).",
      img: img5,
    },
    {
      id: "6",
      name: "saturn",
      description:
        "Saturn is the sixth planet from the sun and is known for its rings.Saturn is the sixth planet from the Sun and is known for its magnificent ring system, which is composed of ice particles and rocky debris. It is also a gas giant like Jupiter, with a diameter of about 116,464 kilometers. Saturn orbits the Sun at an average distance of about 886 million miles (1.4 billion kilometers).",
      img: img6,
    },
    {
      id: "7",
      name: "uranus",
      description:
        "Uranus is the seventh planet from the sun and is known for its blue-green color.Uranus is the seventh planet from the Sun and is known for its blue-green color. It is an ice giant planet, composed mainly of water, ammonia, and methane. Uranus has a diameter of about 50,724 kilometers and orbits the Sun at an average distance of about 1.8 billion miles (2.9 billion kilometers).",
      img: img7,
    },
    {
      id: "8",
      name: "neptune",
      description:
        "Neptune is the eighth planet from the sun and is known for its blue color.Neptune is the eighth planet from the Sun and is known for its vivid blue color, caused by methane in its atmosphere. Like Uranus, it is an ice giant planet with a diameter of about 49,244 kilometers. Neptune orbits the Sun at an average distance of about 2.8 billion miles (4.5 billion kilometers).",
      img: img8,
    },
  ];
  const { name } = useParams();

  const generateStars = (numStars) => {
    let stars = [];
    for (let i = 0; i < numStars; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      };
      stars.push(<Star key={i} style={style} />);
    }
    return stars;
  };
  const [factsAboutMars, setFactsAboutMars] = useState("");

  const planet = data.find((planet) => planet.name === name);

  const [u, setU] = useState({});

  useEffect(() => {
    const user = localStorage.getItem("solar-user");
    if (user) {
      setU(JSON.parse(user));
    }
  }, []);

  // const user = localStorage.getItem("solar-user");

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const getFacts = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/get-facts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: planet.name }),
      });
      const data = await response.json();
      setFactsAboutMars(data?.message?.content);
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert(error);
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <Link
        to="/"
        className="absolute top-0 left-0 m-6 bg-white px-4 py-2 rounded-md text-gray-800"
      >
        Back
      </Link>
      {u?.email ? (
        <div className="absolute top-0 right-0 m-6 flex gap-4 ">
          <img
            src="https://github.com/shadcn.png"
            className="w-10 h-10 rounded-full"
            alt=""
          />
          <button
            onClick={() => {
              localStorage.removeItem("solar-user");
              setU({});
            }}
            className="  bg-white px-4 py-2 rounded-md text-gray-800"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            localStorage.setItem("solar-redirect", "/details/" + planet.name);
            navigate("/login");
          }}
          className="absolute top-0 right-0 m-4 bg-white px-4 py-2 rounded-md text-gray-800"
        >
          Login
        </button>
      )}

      <div className="flex flex-col items-center container max-w-2xl mx-auto mt-8 ">
        {planet?.img ? (
          <img
            src={planet?.img}
            alt={planet?.name}
            className={`
            ${
              planet?.name === "saturn"
                ? " py-8 w-96 "
                : planet.name === "jupiter"
                ? "py-8 w-72 "
                : "mb-2 w-64"
            } z-50
        `}
          />
        ) : null}
        <h1 className="text-2xl capitalize text-white font-bold mb-4">
          {planet?.name}
        </h1>
        <p className="text-gray-600 mb-4">{planet?.description}</p>
      </div>
      <div className="max-w-2xl mx-auto mt-4">
        <button
          onClick={() => {
            if (!u?.email) {
              localStorage.setItem("solar-redirect", "/details/" + planet.name);
              navigate("/login");
            } else {
              // call the backend api to get the facts through openai
              getFacts();
            }
          }}
          className="text-blue-500  text-left font-bold rounded underline"
        >
          Fun facts about the {planet?.name}
        </button>
      </div>
      {loading && (
        <div className="max-w-2xl mx-auto">
          <div className="lds-ellipsis ">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}

      {factsAboutMars &&
        factsAboutMars.split("\n").map((fact, i) => {
          const SplitByColon = fact.split(":");
          return (
            <div
              key={i}
              className={`max-w-2xl mx-auto ${SplitByColon.length && "mt-4"}`}
            >
              {SplitByColon?.length && (
                <p className="text-gray-600">
                  <strong>{SplitByColon[0]} </strong> {SplitByColon[1]}
                </p>
              )}
            </div>
          );
        })}

      {generateStars(200)}
    </React.Fragment>
  );
}
