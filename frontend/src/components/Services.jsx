import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/Kwibuka.png",
      title: "Kwibuka 30 Event",
      date: "07 April, 2024",
      link: "Book",
    },
    {
      id: 2,
      url: "/Dancers.jpg",
      title: "Move Up Event",
      date: "03 May, 2024",
      link: "Book"
    },
    {
      id: 3,
      url: "/Radison.jpg",
      title: "Radisson Lounch Event",
      date: "17 April, 2024",
      link: "Book"
    },
    {
      id: 4,
      url: "/Nyamirambo.jpg",
      title: "Biryogo Trip",
      date: "17 May, 2024",
      link: "Book"
    },
    {
      id: 5,
      url: "/city_tower.jpg",
      title: "DevOps Relax",
      date: "7 September, 2024",
      link: "Book"
    },
    {
      id: 6,
      url: "/wedding.jpg",
      title: "Hwesa Wedding Celemony",
      date: "17 April, 2024",
      link: "Book"
    },
  ];
  return (
    <div className="services container">
      <h2>Events Available</h2>
      <div className="banner">
        {services.map((service) => (
          <div className="item" key={service.id}>
            <img src={service.url} alt={service.title} />
            <div className="details">
              <h3>{service.title}</h3>
              <p>{service.date}</p>
              <a href={service.link} target="_blank" rel="noopener noreferrer">
                {service.link}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;