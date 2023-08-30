import { Link } from "react-router-dom";
function NavLinks() {
  const links = [
    {
      item: "Phones",
      submenu: true,
      sublinks: [
        {
          Head: "Iphone",
          sublinks: [
            { item: "iphone x", link: "/" },
            { item: "iphone 11", link: "/" },
            { item: "iphone 12pro", link: "/" },
            { item: "iphone 13", link: "/" },
          ],
        },
      ],
    },
    { item: "Laptops" },
    { item: "Gaming" },
    { item: "Mounts" },
    { item: "Accessories" },
    { item: "Contact" }
  ];

  return (
    <div className=" md:flex  ">
      {links.map((link, i) => (
        <div key={i} className=" ">
          <div className=" text-sm px-3 text-left md:cursor-pointer">
            <h4 className="mr-6 ">{link.item}</h4>
            {/* {link.submenu && (
              <div className="mega-bg bg-sec-color">
                <div className="mega-menu">
                  <div>
                    {link.sublinks.map((mysublinks, i) => (
                      <div key={i}>
                        <h4 className="head-link">{mysublinks.Head}</h4>
                        {mysublinks.sublinks.map((slink, i) => (
                          <li key={i}>
                            <Link to={slink.link}>{slink.item}</Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )} */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default NavLinks;
