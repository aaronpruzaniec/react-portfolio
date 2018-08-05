import React, { Component } from "react";

class Item extends Component {
  state = {
    items: [
      {
        name: "Become an Affiliate",
        thumbnail: "become_an_affiliate",
        description: "Randomly generated fly in animation",
        link:
          "http://pruzaniec.com/portfolio-non-react/gwynniebee/pages_v6/become_an_affiliate",
        year: "2018",
        tags: ["javascript", "html", "landingPage", "responsive"]
      },
      {
        name: "How It Works",
        thumbnail: "how_it_works",
        description: "Buttons transform into a modal",
        link:
          "http://pruzaniec.com/portfolio-non-react/gwynniebee/pages_v6/how_it_works/",
        year: "2018",
        tags: ["javascript", "html", "landingPage", "responsive"]
      },
      {
        name: "Sun Kissed Style Lookbook",
        thumbnail: "sun_kissed_style_lookbook",
        description: "Details scale effortlessly, loads fast",
        link:
          "http://pruzaniec.com/portfolio-non-react/gwynniebee/pages/sun_kissed_style_lookbook",
        year: "2017",
        tags: ["javascript", "html", "landingPage", "responsive"]
      },
      {
        name: "Summer Lookbook 2017",
        thumbnail: "summer_lookbook_2017",
        description: "Tight shoot with 24-hour turnaround",
        link:
          "http://pruzaniec.com/portfolio-non-react/gwynniebee/pages/summer_lookbook_2017",
        year: "2017",
        tags: ["javascript", "html", "landingPage", "responsive"]
      },
      {
        name: "Tracy Reese Lookbook",
        thumbnail: "tracy_reese_lookbook",
        description: "Exclusive collaboration",
        link:
          "http://pruzaniec.com/portfolio-non-react/gwynniebee/pages/tracy_reese_lookbook",
        year: "2017",
        tags: ["javascript", "html", "landingPage", "responsive"]
      },
      {
        name: "Sean Patrick Wayland",
        thumbnail: "sean_patrick_wayland",
        description: "Campaign for PA State House",
        link: "https://www.spwayland.net/",
        year: "2017",
        tags: ["javascript", "html", "responsive", "ui", "ux"]
      },
      {
        name: "Spring Lookbook 2017",
        thumbnail: "spring_lookbook_2017",
        description: "Road trip inspired photo shoot",
        link:
          "http://pruzaniec.com/portfolio-non-react/gwynniebee/pages/spring_lookbook_2017",
        year: "2016",
        tags: ["javascript", "html", "landingPage", "responsive"]
      },
      {
        name: "Slot Machine",
        thumbnail: "slot_machine",
        description: "Optimized page with 3D animation",
        link:
          "http://pruzaniec.com/portfolio-non-react/gwynniebee/pages/slot_machine",
        year: "2016",
        tags: ["javascript", "html", "landingPage", "responsive"]
      },
      {
        name: "Party Perfect Lookbook",
        thumbnail: "party_perfect_lookbook",
        description: "Shot and coded in half a week",
        link:
          "http://pruzaniec.com/portfolio-non-react/gwynniebee/pages/party_perfect_lookbook",
        year: "2016",
        tags: ["javascript", "html", "landingPage", "responsive"]
      },
      {
        name: "Unlimited Fashion",
        thumbnail: "unlimited_fashion_e",
        description: "Landing page for Facebook ads",
        link:
          "http://pruzaniec.com/portfolio-non-react/gwynniebee/pages/unlimited_fashion_e",
        year: "2015",
        tags: ["javascript", "html", "landingPage", "responsive"]
      },
      {
        name: "Nexus Properties",
        thumbnail: "nexus_properties",
        description: "Real Estate Homepage prototype",
        link: "http://pruzaniec.com/nexus-properties",
        year: "2014",
        tags: ["javascript", "html", "responsive", "ui", "ux"]
      },
      {
        name: "Philips Bulb Finder",
        thumbnail: "philips_bulb_finder",
        description: "Built from relational SQL tables",
        link: "http://pruzaniec.com/bulbfinder/selector.php",
        year: "2014",
        tags: ["html", "ui", "ux"]
      },
      {
        name: "Philips Bike Light",
        thumbnail: "philips_bike_light",
        description: "First featuring 2x graphics",
        link: "http://pruzaniec.com/philipsbikelight",
        year: "2014",
        tags: ["html", "ui", "ux"]
      },
      {
        name: "VDO REDI-Sensor",
        thumbnail: "vdo_redi_sensor",
        description: "Informative page for tire sensors",
        link: "http://pruzaniec.com/vdoredisensor",
        year: "2013",
        tags: ["html", "ui", "ux"]
      },
      {
        name: "VDO RoadLog",
        thumbnail: "vdo_roadlog",
        description: "Product for logging truck hauls",
        link: "http://pruzaniec.com/vdoroadlog",
        year: "2013",
        tags: ["html", "ui", "ux"]
      },
      {
        name: "Philips GoPure",
        thumbnail: "philips_gopure",
        description: "Automotive air filter",
        link: "http://pruzaniec.com/philipsgopure",
        year: "2013",
        tags: ["html", "ui", "ux"]
      },
      {
        name: "JT Sports",
        thumbnail: "jt_sports",
        description: "Catalog for paintball products",
        link: "../jtsports/index.html",
        year: "2010",
        tags: ["ui", "ux"]
      }
    ],
    map: {
      javascript: {
        name: "JavaScript",
        class: "badge-dark"
      },
      landingPage: {
        name: "Landing Page",
        class: "badge-dark"
      },
      responsive: {
        name: "Responsive",
        class: "badge-dark"
      },
      ui: {
        name: "UI",
        class: " badge-dark"
      },
      ux: {
        name: "UX",
        class: " badge-dark"
      },
      html: {
        name: "HTML",
        class: "badge-dark"
      }
    }
  };
  render() {
    let builtItems = this.state.items.map(items => {
      let buildSkills = items.tags.map(tags => {
        return (
          <span>
            <span className="badge badge-pill badge-dark">{tags}</span>
            <span> </span>
          </span>
        );
      });
      return (
        <div className="col-sm-4 outer">
          <a
            className="item"
            href={items.link}
            style={{
              backgroundImage:
                "url(/portfolio-non-react/local-cdn/" +
                items.thumbnail +
                ".jpg)"
            }}
          />
          <h3 className="pt-4">{items.name}</h3>
          <ul className="descArea list-unstyled mt-2 mb-4">
            <li>
              {items.year} —&nbsp;
              {items.description}
            </li>
            <li className="pt-2 pillsOuter">{buildSkills}</li>
          </ul>
        </div>
      );
    });
    return <div className="page row">{builtItems}</div>;
  }
}

export default Item;
