import React, { Component } from "react";

class Item extends Component {
  props = {
    items: [
      {
        name: "Become an Affiliate",
        thumbnail: "become_an_affiliate",
        description: "Randomly generated fly in animation",
        link: "gwynniebee/pages_v6/become_an_affiliate",
        year: "2018",
        tags: ["javascript", "html", "landingPage", "responsive"]
      },
      {
        name: "How It Works",
        thumbnail: "how_it_works",
        description: "Buttons transform into a modal",
        link: "gwynniebee/pages_v6/how_it_works/",
        year: "2018",
        tags: ["javascript", "html", "landingPage", "responsive"]
      },
      {
        name: "Sun Kissed Style Lookbook",
        thumbnail: "sun_kissed_style_lookbook",
        description: "Details scale effortlessly, loads fast",
        link: "gwynniebee/pages/sun_kissed_style_lookbook",
        year: "2017",
        tags: ["javascript", "html", "landingPage", "responsive"]
      },
      {
        name: "Summer Lookbook 2017",
        thumbnail: "summer_lookbook_2017",
        description: "Tight shoot with 24-hour turnaround",
        link: "gwynniebee/pages/summer_lookbook_2017",
        year: "2017",
        tags: ["javascript", "html", "landingPage", "responsive"]
      },
      {
        name: "Tracy Reese Lookbook",
        thumbnail: "tracy_reese_lookbook",
        description: "Exclusive collaboration",
        link: "gwynniebee/pages/tracy_reese_lookbook",
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
        link: "gwynniebee/pages/spring_lookbook_2017",
        year: "2016",
        tags: ["javascript", "html", "landingPage", "responsive"]
      },
      {
        name: "Slot Machine",
        thumbnail: "slot_machine",
        description: "Optimized page with 3D animation",
        link: "gwynniebee/pages/slot_machine",
        year: "2016",
        tags: ["javascript", "html", "landingPage", "responsive"]
      },
      {
        name: "Party Perfect Lookbook",
        thumbnail: "party_perfect_lookbook",
        description: "Shot and coded in half a week",
        link: "gwynniebee/pages/party_perfect_lookbook",
        year: "2016",
        tags: ["javascript", "html", "landingPage", "responsive"]
      },
      {
        name: "Unlimited Fashion",
        thumbnail: "unlimited_fashion_e",
        description: "Landing page for Facebook ads",
        link: "gwynniebee/pages/unlimited_fashion_e",
        year: "2015",
        tags: ["javascript", "html", "landingPage", "responsive"]
      },
      {
        name: "Nexus Properties",
        thumbnail: "nexus_properties",
        description: "Real Estate Homepage prototype",
        link: "../nexus-properties",
        year: "2014",
        tags: ["javascript", "html", "responsive", "ui", "ux"]
      },
      {
        name: "Philips Bulb Finder",
        thumbnail: "philips_bulb_finder",
        description: "Built from relational SQL tables",
        link: "../bulbfinder/selector.php",
        year: "2014",
        tags: ["html", "ui", "ux"]
      },
      {
        name: "Philips Bike Light",
        thumbnail: "philips_bike_light",
        description: "First featuring 2x graphics",
        link: "../philipsbikelight",
        year: "2014",
        tags: ["html", "ui", "ux"]
      },
      {
        name: "VDO REDI-Sensor",
        thumbnail: "vdo_redi_sensor",
        description: "Informative page for tire sensors",
        link: "../vdoredisensor",
        year: "2013",
        tags: ["html", "ui", "ux"]
      },
      {
        name: "VDO RoadLog",
        thumbnail: "vdo_roadlog",
        description: "Product for logging truck hauls",
        link: "../vdoroadlog",
        year: "2013",
        tags: ["html", "ui", "ux"]
      },
      {
        name: "Philips GoPure",
        thumbnail: "philips_gopure",
        description: "Automotive air filter",
        link: "../philipsgopure",
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
      // {
      //   name: '',
      //   thumbnail: '',
      //   description: '',
      //   link: '',
      //   year: '',
      //   tags: [

      //   ]
      // },
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
    return (
      <div className="col-sm-4 outer">
        <a
          className="item"
          href="gwynniebee/pages_v6/become_an_affiliate"
          style={{
            backgroundImage:
              "url(http://pruzaniec.com/portfolio/local-cdn/become_an_affiliate.jpg)"
          }}
        />
        {/* {this.props.items.map(item => <div>{item.name}</div>)} */}
        <h3 className="pt-4">Become an Affiliate</h3>
        <ul className="descArea list-unstyled mt-2 mb-4">
          <li>2018 — Randomly generated fly in animation</li>
          <li className="pt-2 pillsOuter">
            <span className="badge badge-pill badge-dark">javascript</span>{" "}
            <span className="badge badge-pill badge-dark">html</span>{" "}
            <span className="badge badge-pill badge-dark">landingPage</span>{" "}
            <span className="badge badge-pill badge-dark">responsive</span>{" "}
          </li>
        </ul>
      </div>
    );
  }
}

export default Item;
